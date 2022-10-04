import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { AddAppointment } from '~/domain/usecases'
import {RemoteAddAppointment} from '~/data/usecases'

export const makeRemoteAddAppointment = (): AddAppointment =>
  new RemoteAddAppointment(makeSupabaseInstanceDatabaseClient)