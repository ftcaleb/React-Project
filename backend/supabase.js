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

// Create Supabase client (service role is allowed since this is backend)
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
