import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { InstanceDatabaseClient } from "~/data/protocols/instance-database/instance-database";


export class SupabaseInstanceDatabaseClient implements InstanceDatabaseClient {
  async database (): Promise<SupabaseClient> {
    const supabaseUrl = window.ENV.SUPABASE_URL 
    const supabaseKey = window.ENV.SUPABASE_TOKEN

    const supabase = createClient(supabaseUrl, supabaseKey)
    
    return supabase
  }
}