import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import { SearchDateIntervalAppointment } from '~/domain/usecases'
import {RemoteSearchDateIntervalAppointment} from '~/data/usecases'

export const makeRemoteSearchDateIntervalAppointment = (): SearchDateIntervalAppointment =>
new RemoteSearchDateIntervalAppointment(makeSupabaseInstanceDatabaseClient)