import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { OrderAppointment } from '~/domain/usecases'
import {RemoteOrderAppointment} from '~/data/usecases'

export const makeRemoteOrderAppointment = (): OrderAppointment =>
new RemoteOrderAppointment(makeSupabaseInstanceDatabaseClient)