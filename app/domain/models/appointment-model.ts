export type AppointmentModel = {
  id: string,
  title: string,
  started_date: string,
  ending_date: string,
}

export type AppointmentsModel = {
  appointments: AppointmentModel[]
}