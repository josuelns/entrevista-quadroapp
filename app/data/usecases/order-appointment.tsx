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

      console.log('p',params)
      if(params.title !== false){ query = query.order('title',{ascending: true})}
      if(params.started_date !== false){ query = query.order('started_date',{ascending: true})}
      if(params.ending_date !== false){ query = query.order('ending_date',{ascending: true})}

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
  }
}