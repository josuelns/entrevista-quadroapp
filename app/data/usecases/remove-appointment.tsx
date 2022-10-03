import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { RemoveAppointment } from '../../domain/usecases'

export class RemoteRemoveAppointment implements RemoveAppointment {
  constructor (
    private readonly url: string,
    private readonly token: string,
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async remove (params: RemoveAppointment.Params): Promise<RemoveAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database({
      url: this.url,
      token: this.token  
    })
    
    try {
      const data = await instanceDatabseResponse
      .from('appointments')
      .delete()
      .eq('id', params.id)
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