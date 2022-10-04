import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { EditAppointment } from '~/domain/usecases'
import {RemoteEditAppointment} from '~/data/usecases'

export const makeRemoteEditAppointment = (): EditAppointment =>
new RemoteEditAppointment(makeSupabaseInstanceDatabaseClient)