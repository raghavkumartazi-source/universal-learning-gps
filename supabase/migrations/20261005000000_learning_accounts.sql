create table public.learning_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  roadmap jsonb not null,
  completed text[] not null default '{}',
  created_at timestamptz not null default now()
);
create index learning_plans_owner_created on public.learning_plans (user_id, created_at desc);
alter table public.learning_plans enable row level security;
create policy own_plans on public.learning_plans to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
grant select, insert, update, delete on public.learning_plans to authenticated;
revoke all on public.learning_plans from anon;

-- Atomic per-user daily quota shared by every application instance.
create table public.mentor_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null default (now() at time zone 'UTC')::date,
  requests integer not null check (requests between 1 and 20),
  primary key (user_id, day)
);
alter table public.mentor_usage enable row level security;
revoke all on public.mentor_usage from anon, authenticated;
create function public.consume_mentor_quota() returns boolean
language plpgsql security definer set search_path = '' as $$
declare consumed integer;
begin
  if auth.uid() is null then return false; end if;
  insert into public.mentor_usage as usage (user_id, day, requests)
  values (auth.uid(), (now() at time zone 'UTC')::date, 1)
  on conflict (user_id, day) do update set requests = usage.requests + 1
  where usage.requests < 20 returning requests into consumed;
  return consumed is not null;
end;
$$;
revoke all on function public.consume_mentor_quota() from public, anon;
grant execute on function public.consume_mentor_quota() to authenticated;
