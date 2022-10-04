import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { OrderAppointment } from '../../domain/usecases'

export class RemoteOrderAppointment implements OrderAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async order (params: OrderAppointment.Params): Promise<OrderAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()
    
    try {
      let query = instanceDatabseResponse
      .from('appointments')
      .select("*")

      if(params.title){ query = query.order('title',{ascending: false})}
      if(params.started_date){ query = query.order('started_date',{ascending: false})}
      if(params.ending_date){ query = query.order('ending_date',{ascending: false})}

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