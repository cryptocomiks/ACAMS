-- CAMS Exam Trainer: profile photo, job title and LinkedIn link.
-- Run in Supabase: SQL Editor > New query > paste > Run. Safe to run again.
--
-- Photos go to a public Storage bucket "avatars", one folder per user: each user can only write in their own folder.
-- Title and LinkedIn are kept in the account's metadata, and copied to the leaderboard row of members who joined it.

-- 1. Storage bucket: public read, small images only (the site resizes photos to 256 x 256 before upload).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 524288, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = true, file_size_limit = 524288, allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

drop policy if exists "avatars_insert_own" on storage.objects;
create policy "avatars_insert_own" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "avatars_update_own" on storage.objects;
create policy "avatars_update_own" on storage.objects
  for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "avatars_delete_own" on storage.objects;
create policy "avatars_delete_own" on storage.objects
  for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

-- 2. Leaderboard: title, LinkedIn and photo shown next to the name (only if leaderboard.sql was run).
do $$
begin
  if to_regclass('public.leaderboard') is null then
    raise notice 'No leaderboard table yet: run supabase/leaderboard.sql, then this file again.';
    return;
  end if;
  alter table public.leaderboard add column if not exists title text;
  alter table public.leaderboard add column if not exists linkedin text;
  alter table public.leaderboard add column if not exists avatar_url text;
  alter table public.leaderboard drop constraint if exists leaderboard_title_check;
  alter table public.leaderboard add constraint leaderboard_title_check
    check (title is null or char_length(btrim(title)) between 1 and 60);
  alter table public.leaderboard drop constraint if exists leaderboard_linkedin_check;
  alter table public.leaderboard add constraint leaderboard_linkedin_check
    check (linkedin is null or linkedin ~ '^https://([a-z]{2,3}\.)?linkedin\.com/in/[A-Za-z0-9_%-]{2,100}/?$');
  alter table public.leaderboard drop constraint if exists leaderboard_avatar_check;
  alter table public.leaderboard add constraint leaderboard_avatar_check
    check (avatar_url is null or (
      avatar_url ~ '^https://[a-z0-9]+\.supabase\.co/storage/v1/object/public/avatars/'
      and position('/avatars/' || user_id::text || '/' in avatar_url) > 0));
end $$;
