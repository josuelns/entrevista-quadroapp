import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import {RemoteSearchAppointment} from '~/data/usecases'

export const makeRemoteSearchAppointment = new RemoteSearchAppointment(makeSupabaseInstanceDatabaseClient)