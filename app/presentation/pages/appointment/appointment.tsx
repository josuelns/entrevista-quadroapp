import React, { useEffect, useState } from "react";

import { AppointmentsModel } from "~/domain/models";

import {
  AddAppointment,
  EditAppointment,
  LoadAppointment,
  OrderAppointment,
  RemoveAppointment,
  SearchAppointment
} from '../../../domain/usecases'

import AppointmentCard from "./components/AppointmentCard/appointmentCard";

type Props = {
  addAppointment: AddAppointment,
  editAppointment: EditAppointment,
  loadAppointment: LoadAppointment,
  orderAppointment: OrderAppointment,
  removeAppointment: RemoveAppointment,
  searchAppointment: SearchAppointment,
}

const Appointment: React.FC<Props> = ({ addAppointment, editAppointment, loadAppointment, orderAppointment, removeAppointment, searchAppointment }: Props) => {
  const [title, setTitle] = useState<string>("")
  const [stardedDate, setStartedDate] = useState<string>("")
  const [endingDate, setEndingDate] = useState<string>("")

  const [appointments, setAppointments] = useState<AppointmentsModel>()

  const loadAppointmentPage = async (): Promise<void> => {
    try {
      const data = await loadAppointment.load()
      console.log(data)
      setAppointments(data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  const handleAddAppointment = async (): Promise<void> => {
    try {
      const data = await addAppointment.add(
        {
          title: title,
          started_date: stardedDate,
          ending_date: endingDate
        }
      )
      console.log(data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  const handleSearchAppointment = async (): Promise<void> => {
    try {
      const data = await searchAppointment.search(
        {
          title: title,
          started_date: stardedDate,
          ending_date: endingDate
        }
      )
      console.log(data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadAppointmentPage()
  }, [])

  return (
    <div className="appointmentWrap">
      <section className="appointmentHeader">
        <h1>Appointments</h1>
      </section>
      <div className="AppointmentFormWrap">
        <form
          className="appointmentForm"
          onSubmit={(e) => e.defaultPrevented}
        >
          <input
            type="text"
            value={title}
            onChange={e => setTitle}
          />
          <input
            type="datetime-local"
            value={stardedDate}
            onChange={e => setStartedDate}
          />
          <input
            type="datetime-local"
            value={endingDate}
            onChange={e => setEndingDate}
          />
          <button
            className="btnAddAppoitment"
            onClick={() => handleAddAppointment}
          >
            Agendar
          </button>
          <button
            className="btnSearchAppoitment"
            onClick={() => handleSearchAppointment}
          >
            Pesquisar
          </button>
        </form>
      </div>
      <ul>
        {
          appointments?.appointments.map((item, key) => {
            return (
              <AppointmentCard 
                  key={item.id}
                  Appointment={item}
                  EditAppointment={editAppointment}
                  RemoveAppointment={removeAppointment}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default Appointment