create table if not exists public.bookings (
  id bigserial primary key,
  fullname text not null,
  email text not null,
  phone text not null,
  date date not null,
  time text not null,
  service text not null,
  duration text,
  created_at timestamptz default timezone('utc'::text, now())
);

create index if not exists idx_bookings_date_time_service 
  on public.bookings (date, time, service);
