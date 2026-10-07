-- CAMS Exam Trainer: community "most missed" questions.
-- Run in Supabase: SQL Editor > New query > paste > Run. Safe to run again.
--
-- What is stored: for each signed-in user and question, only the result of their FIRST attempt (right or wrong).
-- Nobody can read these rows. The site only reads totals per question, and only for questions answered
-- by at least 5 people, so no individual result can be inferred.
-- One row per user and question: replaying a question or spamming the endpoint cannot skew the totals.

create table if not exists public.question_first (
  user_id     uuid not null references auth.users (id) on delete cascade,
  question_id text not null check (question_id ~ '^[A-Z0-9]{1,8}-[0-9]{3}$'),
  ok          boolean not null,
  created_at  timestamptz not null default now(),
  primary key (user_id, question_id)
);
create index if not exists question_first_qid on public.question_first (question_id);

alter table public.question_first enable row level security;
revoke all on table public.question_first from anon, authenticated;   -- no direct access: functions only

-- Records first attempts for the calling user. answers = [{"q": "D1-001", "ok": true}, ...], at most 100 per call.
-- Later attempts on the same question are ignored.
create or replace function public.record_first_answers(answers jsonb)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  n integer;
begin
  if uid is null then
    raise exception 'sign in required';
  end if;
  if jsonb_typeof(answers) <> 'array' or jsonb_array_length(answers) > 100 then
    raise exception 'expected an array of at most 100 answers';
  end if;
  insert into public.question_first (user_id, question_id, ok)
  select uid, a->>'q', (a->>'ok')::boolean
  from jsonb_array_elements(answers) as a
  where jsonb_typeof(a->'ok') = 'boolean'
    and (a->>'q') ~ '^[A-Z0-9]{1,8}-[0-9]{3}$'
  on conflict (user_id, question_id) do nothing;
  get diagnostics n = row_count;
  return n;
end;
$$;

-- Questions the community misses most on the first try (at least min_n first attempts each).
create or replace function public.community_most_missed(min_n integer default 5, lim integer default 50)
returns table (question_id text, attempts integer, misses integer, miss_rate numeric)
language sql
security definer
stable
set search_path = ''
as $$
  select f.question_id,
         count(*)::integer as attempts,
         count(*) filter (where not f.ok)::integer as misses,
         round(count(*) filter (where not f.ok)::numeric / count(*), 3) as miss_rate
  from public.question_first f
  group by f.question_id
  having count(*) >= greatest(min_n, 5)
  order by miss_rate desc, attempts desc
  limit least(greatest(lim, 1), 200);
$$;

revoke all on function public.record_first_answers(jsonb) from public, anon;
grant execute on function public.record_first_answers(jsonb) to authenticated;
revoke all on function public.community_most_missed(integer, integer) from public;
grant execute on function public.community_most_missed(integer, integer) to anon, authenticated;
