import { SupabaseClient } from "@supabase/supabase-js"

export type DatabaseloaderInterface = {
  url: string
  token: string
}

export interface InstanceDatabaseClient {
  database: (loader: DatabaseloaderInterface) => Promise<SupabaseClient>
}
