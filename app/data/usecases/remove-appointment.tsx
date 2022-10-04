import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { RemoveAppointment } from '../../domain/usecases'

export class RemoteRemoveAppointment implements RemoveAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async remove (params: RemoveAppointment.Params): Promise<RemoveAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()
    
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