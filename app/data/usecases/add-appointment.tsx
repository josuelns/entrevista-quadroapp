import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { AddAppointment } from '../../domain/usecases'

export class RemoteAddAppointment implements AddAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async add (params: AddAppointment.Params): Promise<AddAppointment.Model> {
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