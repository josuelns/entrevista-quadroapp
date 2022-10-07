import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import {RemoteRemoveAppointment} from '~/data/usecases'

export const makeRemoteRemoveAppointment = new RemoteRemoveAppointment(makeSupabaseInstanceDatabaseClient)