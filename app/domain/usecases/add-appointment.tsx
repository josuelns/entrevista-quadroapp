import { AppointmentAddModel } from '../models'

export interface AddAppointment {
  add: (params: AddAppointment.Params) => Promise<AddAppointment.Model>
}

export namespace AddAppointment {
  export type Params = {
    title: string, 
    started_date: string, 
    ending_date: string,
  }

  export type Model = AppointmentAddModel
}