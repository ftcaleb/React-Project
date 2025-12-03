// backend/supabase.js
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Supabase URL or Key missing in .env");
  process.exit(1);
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function ensureBookingsTable() {
  const createTableSQL = `
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
  `;

  try {
    // Call the RPC and await the result
    const result = await supabase.rpc("execute_sql", { sql: createTableSQL });

    // supabase.rpc returns an object like { data, error } — check for error
    if (result.error) {
      console.error("Error creating bookings table:", result.error);
    } else {
      console.log("Bookings table ensured ✅");
    }
  } catch (err) {
    // Catch anything that throws (network, client-side, unexpected)
    console.error("Failed to create bookings table (exception):", err);
  }
}

// Run the table-ensure (optional — remove if you prefer to run SQL manually)
ensureBookingsTable();

export default supabase;
