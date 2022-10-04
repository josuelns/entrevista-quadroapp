import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { RemoveAppointment } from '~/domain/usecases'
import {RemoteRemoveAppointment} from '~/data/usecases'

export const makeRemoteRemoveAppointment = (): RemoveAppointment =>
new RemoteRemoveAppointment(makeSupabaseInstanceDatabaseClient)