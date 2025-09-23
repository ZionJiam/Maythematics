import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export const createClient = () => {
  // Use service_role key here — never expose this to the client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createSupabaseClient(supabaseUrl, serviceRoleKey);
};
