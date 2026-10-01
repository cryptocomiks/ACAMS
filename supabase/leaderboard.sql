-- CAMS Exam Trainer: leaderboard (weekly XP, daily challenge, all-time XP).
-- Run in Supabase: SQL Editor > New query > paste > Run. Safe to run again.
-- Joining is opt-in from the Ranks tab: only a public name chosen by the user and their scores are stored here.
-- Signed-in users can read visible rows. Each user writes only their own row, and a trigger checks every write.

create table if not exists public.leaderboard (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  name        text not null default 'Player' check (char_length(btrim(name)) between 1 and 40),
  week        text not null default '' check (char_length(week) <= 10),
  xp_week     integer not null default 0 check (xp_week between 0 and 200000),
  xp_total    integer not null default 0 check (xp_total between 0 and 10000000),
  streak      integer not null default 0 check (streak between 0 and 5000),
  level       integer not null default 1 check (level between 1 and 1000),
  daily_date  text check (char_length(daily_date) <= 10),
  daily_score integer check (daily_score between 0 and 10),
  daily_ms    integer check (daily_ms between 0 and 86400000),
  visible     boolean not null default false,
  gain_day    date,                                -- XP budget bookkeeping (set by the trigger only)
  gain_xp     integer not null default 0,
  updated_at  timestamptz not null default now()
);
-- Upgrades a table created by an earlier version of this file.
alter table public.leaderboard alter column visible set default false;
alter table public.leaderboard add column if not exists gain_day date;
alter table public.leaderboard add column if not exists gain_xp integer not null default 0;

create index if not exists leaderboard_week_xp on public.leaderboard (week, xp_week desc);
create index if not exists leaderboard_daily on public.leaderboard (daily_date, daily_score desc, daily_ms);
create index if not exists leaderboard_total on public.leaderboard (xp_total desc);

-- Scores are computed in the browser, so the server keeps them plausible:
--  * XP grows at a human pace: at most 500 XP + 10 XP per second since the last write, and 10,000 XP per day.
--  * Weekly XP never exceeds the XP actually gained; weeks only move forward.
--  * The level always matches the XP (same formula as the app).
--  * The first daily-challenge result posted for a day is final, and needs at least 15 seconds for the 10 questions.
create or replace function public.leaderboard_guard()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  today     date := (now() at time zone 'utc')::date;
  today_max text := to_char((now() at time zone 'utc')::date + 1, 'YYYY-MM-DD');
  secs      bigint;
  used      bigint;
  allowed   bigint;
  gained    bigint;
begin
  -- An upsert fires the INSERT trigger even when the row already exists: the UPDATE branch checks that case.
  if tg_op = 'INSERT' and exists (select 1 from public.leaderboard l where l.user_id = new.user_id) then
    return new;
  end if;

  new.name := btrim(new.name);

  if tg_op = 'UPDATE' then
    secs := greatest(0, floor(extract(epoch from (now() - old.updated_at))))::bigint;
    used := case when old.gain_day = today then old.gain_xp else 0 end;
    allowed := greatest(0, least(500 + 10 * secs, 10000 - used));
    if new.xp_total > old.xp_total then
      new.xp_total := least(new.xp_total::bigint, old.xp_total + allowed);
    end if;
    gained := greatest(0, new.xp_total - old.xp_total);
    new.gain_day := today;
    new.gain_xp := least(1000000, used + gained);
    if new.week < old.week then
      new.week := old.week;
      new.xp_week := old.xp_week;
    elsif new.week = old.week then
      new.xp_week := least(new.xp_week::bigint, old.xp_week + gained);
    else
      new.xp_week := least(new.xp_week::bigint, gained);
    end if;
  else
    -- First write (joining): progress made before joining counts, within limits.
    new.xp_total := least(new.xp_total, 20000);
    new.xp_week := least(new.xp_week, 10000);
    new.gain_day := today;
    new.gain_xp := 0;
  end if;
  new.xp_week := least(new.xp_week, new.xp_total);
  new.level := floor((1 + sqrt(1 + 0.08 * new.xp_total)) / 2)::integer;

  -- Daily challenge.
  if tg_op = 'UPDATE' and old.daily_date is not null and (new.daily_date is null or new.daily_date <= old.daily_date) then
    new.daily_date := old.daily_date;
    new.daily_score := old.daily_score;
    new.daily_ms := old.daily_ms;
  elsif new.daily_date is not null and (new.daily_score is null or new.daily_ms is null or new.daily_ms < 15000
        or new.daily_date !~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' or new.daily_date > today_max) then
    if tg_op = 'UPDATE' then
      new.daily_date := old.daily_date;
      new.daily_score := old.daily_score;
      new.daily_ms := old.daily_ms;
    else
      new.daily_date := null;
      new.daily_score := null;
      new.daily_ms := null;
    end if;
  end if;

  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists leaderboard_guard on public.leaderboard;
create trigger leaderboard_guard
  before insert or update on public.leaderboard
  for each row execute function public.leaderboard_guard();

alter table public.leaderboard enable row level security;

revoke all on table public.leaderboard from anon;
grant select, insert, update on table public.leaderboard to authenticated;

drop policy if exists "leaderboard_select" on public.leaderboard;
create policy "leaderboard_select" on public.leaderboard
  for select to authenticated using (visible or (select auth.uid()) = user_id);

drop policy if exists "leaderboard_insert_own" on public.leaderboard;
create policy "leaderboard_insert_own" on public.leaderboard
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "leaderboard_update_own" on public.leaderboard;
create policy "leaderboard_update_own" on public.leaderboard
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
