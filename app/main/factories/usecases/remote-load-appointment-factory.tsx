import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { LoadAppointment } from '~/domain/usecases'
import {RemoteLoadAppointment} from '~/data/usecases'

export const makeRemoteLoadAppointment = (): LoadAppointment =>
new RemoteLoadAppointment(makeSupabaseInstanceDatabaseClient)