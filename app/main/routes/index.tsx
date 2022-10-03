import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import {format} from "date-fns";

export const loader = () => {
  return json({
    url: process.env.SUPABASE_URL!,
    token: process.env.SUPABASE_TOKEN!
  })
}

interface Appointment {
  id: number,
  title: string,
  started_date: string,
  ending_date: string,  
}

interface AppointmentDTO {
  title: string,
  started_date: string | undefined,
  ending_date: string | undefined,  
}
export default function Index() {
  const { url, token } = useLoaderData<typeof loader>()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const supabaseClient = createClient(url, token)

  //create
  const [title, setTitle] = useState("")
  const [stardedDate, setStartedDate] = useState<string>("")
  const [endingDate, setEndingDate] = useState<string>("")

  useEffect(() => {
    supabaseClient.from<Appointment>('appointments').select().then((response) => {
      if (response.error) {
        console.error('Error fetching appointments', response.error)
        return
      }

      if (!response.data) {
        console.error('No appointments found')
        return
      }
      setAppointments(response.data)
    })
  }, [])

  async function createAppointment({title, started_date, ending_date }:AppointmentDTO){
    console.log(title,started_date,ending_date)
    const { data, error } = await supabaseClient
      .from('appointments')
      .insert([
        { title, started_date, ending_date},
      ])
  }

  async function deleteAppointment(id: number){
    const { data, error } = await supabaseClient
    .from('appointments')
    .delete()
    .eq('id', id)
  }

  async function editAppointment(id: number,title: string, started_date: string, ending_date: string){
    const { data, error } = await supabaseClient
    .from('appointments')
    .update({ title, started_date, ending_date })
    .eq('id', id)
  }

  async function searchAppointment(title: string, started_date: string, ending_date: string){
    let query = supabaseClient
      .from('appointments')
      .select("*")

    if(title){ 
      console.log('confirmo que entrei com titulo')
      query = query.ilike('title', '%'+title+"%")
    }
    if(started_date.length > 0){ 
      console.log('to aqui') 
      query = query.eq('started_date', started_date)
    }
    if(ending_date.length > 0){ query = query.eq('ending_date', ending_date)}

    let response = await query
    setAppointments(response.data as Appointment[])
    
  }

  async function orderAppointment(title: boolean, started_date: boolean, ending_date: boolean){
    let query = supabaseClient
      .from('appointments')
      .select("*")

    if(title){ query = query.order('title',{ascending: false})}
    if(started_date){ query = query.order('started_date',{ascending: false})}
    if(ending_date){ query = query.order('ending_date',{ascending: false})}

    let { data: appointments, error } = await query
    console.log(appointments)
    
  }

  async function dateIntervalAppointment(started_date: string, ending_date: string){
    let query = supabaseClient
      .from('appointments')
      .select("*")
      .gte('started_date', started_date)
      .lte('ending_date', ending_date)

    let { data: appointments, error } = await query
    console.log(appointments)
    
  }
  return (
    <div>
      <h1>Appointments</h1>
      <div>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="datetime-local" value={stardedDate} onChange={e => setStartedDate(format(new Date(e.target.value), 'yyyy-MM-dd hh:mm'))} />
        <input type="datetime-local" value={endingDate} onChange={e => setEndingDate(format(new Date(e.target.value), 'yyyy-MM-dd hh:mm'))}/>
        <button  onClick={() => createAppointment({
          title: title,
          started_date: stardedDate,
          ending_date: endingDate
        })}>
          Agendar
        </button>
        <button  onClick={() => searchAppointment(
          title,
          stardedDate,
          endingDate
        )}>
          Pesquisar
        </button>
      </div>
      <ul>
        {appointments?.map((appointment) => {
          return (
            <div key={appointment.id}>
              <li>{appointment.title}</li>
              <li>{format(new Date(appointment.started_date), 'dd-MM-yyyy hh:mm')}</li>
              <li>{format(new Date(appointment.ending_date), 'dd-MM-yyyy hh:mm')}</li>
              <button onClick={() => deleteAppointment(appointment.id)}>Apagar</button>
              <button onClick={() => editAppointment(appointment.id,appointment.title,appointment.started_date,appointment.ending_date)}>Editar</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}
