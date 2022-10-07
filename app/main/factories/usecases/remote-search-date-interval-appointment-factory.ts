import { makeSupabaseInstanceDatabaseClient } from '~/main/factories/http-db-conect'
import {RemoteSearchDateIntervalAppointment} from '~/data/usecases'

export const makeRemoteSearchDateIntervalAppointment = new RemoteSearchDateIntervalAppointment(makeSupabaseInstanceDatabaseClient)