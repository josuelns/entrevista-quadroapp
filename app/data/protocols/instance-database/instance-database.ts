import { SupabaseClient } from "@supabase/supabase-js"

export interface InstanceDatabaseClient {
  database: () => Promise<SupabaseClient>
}
