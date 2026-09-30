-- CAMS Exam Trainer: one row of progress per user (XP, streak, badges, answers, review schedule).
-- Run this once in Supabase: SQL Editor > New query > paste > Run.

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

-- Explicit Data API access (needed when "Automatically expose new tables" is off):
-- signed-in users only; anonymous visitors get nothing. RLS below limits each user to their own row.
revoke all on table public.progress from anon;
grant select, insert, update on table public.progress to authenticated;

-- Each signed-in user can read and write only their own row.
drop policy if exists "progress_select_own" on public.progress;
create policy "progress_select_own" on public.progress
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "progress_insert_own" on public.progress;
create policy "progress_insert_own" on public.progress
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "progress_update_own" on public.progress;
create policy "progress_update_own" on public.progress
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Keep rows a sane size (progress JSON is ~50-150 KB at most).
alter table public.progress drop constraint if exists progress_data_size;
alter table public.progress add constraint progress_data_size check (pg_column_size(data) < 1000000);
