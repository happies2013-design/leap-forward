
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles: owner select" on public.profiles for select using (auth.uid() = id);
create policy "Profiles: owner update" on public.profiles for update using (auth.uid() = id);
create policy "Profiles: owner insert" on public.profiles for insert with check (auth.uid() = id);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text,
  prompt text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Projects: owner select" on public.projects for select using (auth.uid() = user_id);
create policy "Projects: owner insert" on public.projects for insert with check (auth.uid() = user_id);
create policy "Projects: owner update" on public.projects for update using (auth.uid() = user_id);
create policy "Projects: owner delete" on public.projects for delete using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
