-- CAMS Exam Trainer: leaderboard (weekly XP, daily challenge, all-time XP).
-- Run once in Supabase: SQL Editor > New query > paste > Run.
-- Only a display name and scores are stored here. Signed-in users can read the board; each user writes only their own row.

create table if not exists public.leaderboard (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  name        text not null default 'Player' check (char_length(name) between 1 and 40),
  week        text not null default '' check (char_length(week) <= 10),
  xp_week     integer not null default 0 check (xp_week between 0 and 200000),
  xp_total    integer not null default 0 check (xp_total between 0 and 10000000),
  streak      integer not null default 0 check (streak between 0 and 5000),
  level       integer not null default 1 check (level between 1 and 1000),
  daily_date  text check (char_length(daily_date) <= 10),
  daily_score integer check (daily_score between 0 and 10),
  daily_ms    integer check (daily_ms between 0 and 86400000),
  visible     boolean not null default true,
  updated_at  timestamptz not null default now()
);

create index if not exists leaderboard_week_xp on public.leaderboard (week, xp_week desc);
create index if not exists leaderboard_daily on public.leaderboard (daily_date, daily_score desc, daily_ms);
create index if not exists leaderboard_total on public.leaderboard (xp_total desc);

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
