import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { DatabaseloaderInterface, InstanceDatabaseClient } from "~/data/protocols/instance-database/instance-database";

export class SupabaseInstanceDatabaseClient implements InstanceDatabaseClient {
  async database (databaseloader: DatabaseloaderInterface): Promise<SupabaseClient> {
    const loader = async() => json(databaseloader) 
    const { url, token } = useLoaderData<typeof loader>()
    return createClient(url, token)
  }
}