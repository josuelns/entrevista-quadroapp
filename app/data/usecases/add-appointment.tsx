import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { AddAppointment } from '../../domain/usecases'

export class RemoteAddAppointment implements AddAppointment {
  constructor (
    private readonly url: string,
    private readonly token: string,
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async add (params: AddAppointment.Params): Promise<AddAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database({
      url: this.url,
      token: this.token  
    })
    
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