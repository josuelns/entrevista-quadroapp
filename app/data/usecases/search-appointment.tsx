import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { SearchAppointment } from '../../domain/usecases'

export class RemoteSearchAppointment implements SearchAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async search (params: SearchAppointment.Params): Promise<SearchAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()

    try {
      let query = instanceDatabseResponse
      .from('appointments')
      .select("*")

      if(params.title){ 
        query = query.ilike('title', '%'+params.title+"%")
      }
      if(params.started_date.length > 0){
        query = query.eq('started_date', params.started_date)
      }
      if(params.ending_date.length > 0){ query = query.eq('ending_date', params.ending_date)}

      let { data: appointments, error } = await query

      if(appointments){
        return {
          appointments: appointments
        }
      }
      else{
        return {
          appointments: []
        }
      }
      
    } catch (error) {
      return {
        appointments: []
      }
    }
    finally{
      return {
        appointments: []
      }
    }
  }
}