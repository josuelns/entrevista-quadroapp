import React, { useEffect, useState } from "react";

import { AppointmentsModel } from "~/domain/models";
import { useformatDate } from "~/presentation/hooks";

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

  const [orderTitle, setOrderTitle] = useState<boolean>(false)
  const [orderStardedDate, setOrderStartedDate] = useState<boolean>(false)
  const [orderEndingDate, setOrderEndingDate] = useState<boolean>(false)

  const [appointments, setAppointments] = useState<AppointmentsModel>({appointments: []})

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
    const search = async () => {
      try {
        const data =  await searchAppointment.search(
          {
            title: title,
            started_date: stardedDate,
            ending_date: endingDate
          }
        )

        setAppointments(data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    search()
  }

  const handleOrderAppointment = async (): Promise<void> => {
    const order = async () => {
      try {
        const data =  await orderAppointment.order(
          {
            title: orderTitle,
            started_date: orderStardedDate,
            ending_date: orderEndingDate
          }
        )

        setAppointments(data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    order()
  }

  useEffect(() => {
    const load = async () => {
      try {
        const data = await loadAppointment.load()
        setAppointments(data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    load()
  }, [])

  return (
    <div className="appointmentWrap">
      <section className="appointmentHeader">
        <h1>Agendamentos</h1>
      </section>
      <div className="AppointmentFormWrap">
        <form
          className="appointmentForm"
        >
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="datetime-local"
            value={stardedDate}
            onChange={e => setStartedDate(useformatDate(e.target.value))}
          />
          <input
            type="datetime-local"
            value={endingDate}
            onChange={e => setEndingDate(useformatDate(e.target.value))}
          />
          <button
            className="btnAddAppoitment"
            type="button"
            onClick={() => handleAddAppointment()}
          >
            Agendar
          </button>
          <button
            type="button"
            className="btnSearchAppoitment"
            onClick={() => handleSearchAppointment()}
          >
            Pesquisar
          </button>
        </form>
      </div>
      <div className="AppointmentFormOrderWrap">
        <form
          className="appointmentForm"
          onSubmit={(e) => e.defaultPrevented}
        >
          <span> Ordenar:</span>
          <input
            name='orderName'
            type="checkbox"
            checked={orderTitle}
            onChange={() => setOrderTitle(!orderTitle)}
          />
          <label htmlFor="orderName"> Nome</label>
          
          <input
            name='orderStardedDate'
            type="checkbox"
            checked={orderStardedDate}
            onChange={() => setOrderStartedDate(!orderStardedDate)}
          />
          <label htmlFor="orderStardedDate">Agendamento Início</label>
          
          <input
            name='orderEndingDate'
            type="checkbox"
            checked={orderEndingDate}
            onChange={() => setOrderEndingDate(!orderEndingDate)}
          />
          <label htmlFor="orderEndingDate">Agendamento Término</label>
          
          <button
            type='button'
            className="btnOrderAppoitment"
            onClick={() => handleOrderAppointment()}
          >
            Organizar
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