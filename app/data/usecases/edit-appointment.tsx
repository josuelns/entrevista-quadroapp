import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { EditAppointment } from '../../domain/usecases'

export class RemoteEditAppointment implements EditAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async edit (params: EditAppointment.Params): Promise<EditAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()
    
    try {
      const data = await instanceDatabseResponse
      .from('appointments')
      .insert([
        { ...params},
      ])
      return {
        StatusCode: data.status
      }
    } catch (error) {
      
    }
    finally{
      return {
        StatusCode: 500
      }
    }
  }
}