import type { Database } from './database.types';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let browserClient: SupabaseClient<Database> | null = null;
export function getBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  browserClient ??= createClient<Database>(url, key);
  return browserClient;
}
