import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { SearchAppointment } from '~/domain/usecases'
import {RemoteSearchAppointment} from '~/data/usecases'

export const makeRemoteSearchAppointment = (): SearchAppointment =>
new RemoteSearchAppointment(makeSupabaseInstanceDatabaseClient)