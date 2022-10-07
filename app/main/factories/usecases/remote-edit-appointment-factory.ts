import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import {RemoteEditAppointment} from '~/data/usecases'

export const makeRemoteEditAppointment = new RemoteEditAppointment(makeSupabaseInstanceDatabaseClient)