import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { SearchDateIntervalAppointment } from '../../domain/usecases'

export class RemoteSearchDateIntervalAppointment implements SearchDateIntervalAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async dateInterval (params: SearchDateIntervalAppointment.Params): Promise<SearchDateIntervalAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()

    try {
      let query = instanceDatabseResponse
      .from('appointments')
      .select("*")
      .gte('started_date', params.started_date)
      .lte('ending_date', params.ending_date)

      let { data: appointments, error } = await query

      console.log(appointments)

      if(appointments){
        return appointments
      }
      else{
        return []
      }
      
    } catch (error) {
      return []
    }
  }
}