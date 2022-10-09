import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { EditAppointment } from '../../domain/usecases'

export class RemoteEditAppointment implements EditAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async edit (params: EditAppointment.Params): Promise<EditAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()
    

    console.log('estou aqui editando', params)

    try {
      const data = await instanceDatabseResponse
      .from('appointments')
      .update({ ...params})
      .eq('id', params.id)
      return {
        StatusCode: data.status
      }
    } catch (error) {
      return {
        StatusCode: 500
      } 
    }
  }
}