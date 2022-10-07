import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import {RemoteLoadAppointment} from '~/data/usecases'

export const makeRemoteLoadAppointment = new RemoteLoadAppointment(makeSupabaseInstanceDatabaseClient)