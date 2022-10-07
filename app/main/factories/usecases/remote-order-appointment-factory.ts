import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import {RemoteOrderAppointment} from '~/data/usecases'

export const makeRemoteOrderAppointment = new RemoteOrderAppointment(makeSupabaseInstanceDatabaseClient)