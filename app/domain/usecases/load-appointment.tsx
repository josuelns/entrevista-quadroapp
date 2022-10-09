import { AppointmentModel } from '../models'

export interface LoadAppointment {
  load: () => Promise<LoadAppointment.Model>
}

export namespace LoadAppointment {
  export type Model = Array<AppointmentModel>
}