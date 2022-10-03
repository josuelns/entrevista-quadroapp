export interface Appointment {
    id: number,
    title: string,
    started_date: string,
    ending_date: string,  
}
  
export interface AppointmentCardModel {
    appointment: Appointment
    handleClickEdit: () => void
    handleClickDelete: () => void
}