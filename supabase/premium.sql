-- CAMS Exam Trainer: Premium entitlements (written by the Stripe webhook only).
-- Run in Supabase: SQL Editor > New query > paste > Run. Safe to run again.
-- Users can read their own row; nobody can write it from the browser. The webhook uses the service role key.

create table if not exists public.entitlements (
  user_id                uuid primary key references auth.users (id) on delete cascade,
  plan                   text not null check (plan in ('monthly', 'quarterly', 'pass6', 'annual', 'lifetime')),
  status                 text not null,              -- active, trialing, paid (pass), past_due, canceled...
  current_period_end     timestamptz,
  stripe_customer_id     text,
  stripe_subscription_id text unique,
  updated_at             timestamptz not null default now()
);

alter table public.entitlements enable row level security;
revoke all on table public.entitlements from anon, authenticated;
grant select on table public.entitlements to authenticated;

drop policy if exists "entitlements_select_own" on public.entitlements;
create policy "entitlements_select_own" on public.entitlements
  for select to authenticated using ((select auth.uid()) = user_id);

-- Allow free "lifetime" access granted by hand (e.g. the site owner). Upgrades a table created before.
alter table public.entitlements drop constraint if exists entitlements_plan_check;
alter table public.entitlements add constraint entitlements_plan_check check (plan in ('monthly', 'quarterly', 'pass6', 'annual', 'lifetime'));

-- To give someone free Premium, replace the email and run:
-- insert into public.entitlements (user_id, plan, status, current_period_end)
-- select id, 'lifetime', 'active', null from auth.users where email = 'someone@example.com'
-- on conflict (user_id) do update set plan = 'lifetime', status = 'active', current_period_end = null, updated_at = now();
