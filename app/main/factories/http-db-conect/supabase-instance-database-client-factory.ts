import { SupabaseInstanceDatabaseClient } from '~/infra'

export const makeSupabaseInstanceDatabaseClient = new SupabaseInstanceDatabaseClient({
  url: process.env.SUPABASE_URL!,
  token: process.env.SUPABASE_TOKEN!
})
