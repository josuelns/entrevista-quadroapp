import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { LoadAppointment } from '../../domain/usecases'

export class RemoteLoadAppointment implements LoadAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async load (): Promise<LoadAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()
    
    try {
      let query = instanceDatabseResponse
      .from('appointments')
      .select("*")

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