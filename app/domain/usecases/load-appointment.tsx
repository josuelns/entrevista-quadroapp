import { AppointmentsModel } from '../models'

export interface LoadAppointment {
  load: () => Promise<LoadAppointment.Model>
}

export namespace LoadAppointment {
  export type Model = AppointmentsModel
}