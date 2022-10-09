import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { AddAppointment } from '../../domain/usecases'

export class RemoteAddAppointment implements AddAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async add (params: AddAppointment.Params): Promise<AddAppointment.Model> {
    const instanceDatabseResponse = await this.InstanceDatabaseClient.database()
    
    console.log('dt', new Date(params.ending_date))

    try {
      const data = await instanceDatabseResponse
      .from('appointments')
      .insert([
        {'title': params.title, 'started_date': params.started_date, 'ending_date': params.ending_date}
      ])

      console.log(data)
      return {
        StatusCode: data.status
      }
    } catch (error) {
      return{
        StatusCode: 500
      }
    }
  }
}