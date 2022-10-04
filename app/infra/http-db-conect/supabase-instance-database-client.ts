import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { DatabaseloaderInterface, InstanceDatabaseClient } from "~/data/protocols/instance-database/instance-database";

export class SupabaseInstanceDatabaseClient implements InstanceDatabaseClient {
  constructor (
    private readonly params : {
      url: string,
      token: string,
    }
  ) {}

  async database (): Promise<SupabaseClient> {
    const databaseloader: DatabaseloaderInterface = {
      url: this.params.url,
      token: this.params.token
    }
    const loader = async() => json(databaseloader) 
    const { url, token } = useLoaderData<typeof loader>()
    return createClient(url, token)
  }
}