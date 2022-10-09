import { InstanceDatabaseClient  } from '../protocols/instance-database'
import { LoadAppointment } from '../../domain/usecases'

export class RemoteLoadAppointment implements LoadAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient
  ) {}

  async load (): Promise<LoadAppointment.Model> {
    const instanceDatabase = await this.InstanceDatabaseClient.database()
    let appointmentsData: any = []
    
    const cb = async () => {
      return await instanceDatabase
      .from('appointments')
      .select("*") 
      .order('id', {ascending: false})
    }

    appointmentsData =  (await cb()).body 

    return appointmentsData   
  }
}