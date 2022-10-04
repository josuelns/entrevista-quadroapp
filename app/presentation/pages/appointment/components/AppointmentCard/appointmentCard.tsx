import { format } from "date-fns"
import { useState } from "react"
import { AppointmentModel } from "~/domain/models"

import {
    EditAppointment,
    RemoveAppointment
} from '../../../../../domain/usecases'

type Props = {
    EditAppointment: EditAppointment,
    RemoveAppointment: RemoveAppointment
    Appointment: AppointmentModel
}

const AppointmentCard: React.FC<Props> = ({ EditAppointment, RemoveAppointment, Appointment }: Props) => {
    const [title, setTitle] = useState<string>(Appointment.title)
    const [started, setStarded] = useState<string>(Appointment.started_date)
    const [ending, setEnding] = useState<string>(Appointment.ending_date)

    const handleClickEdit = async (): Promise<void> => {
        try {
            const data = await EditAppointment.edit(
                {
                    id: Appointment.id,
                    title: title,
                    started_date: started,
                    ending_date: ending
                }
            )
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleClickDelete = async (): Promise<void> => {
        try {
            const data = await RemoveAppointment.remove(
                {
                    id: Appointment.id
                }
            )
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <form onSubmit={e => e.preventDefault()}>
                <li>
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                </li>
                <li>
                    <input type="datetime-local" value={started} onChange={e => setStarded(format(new Date(e.target.value), 'yyyy-MM-dd hh:mm'))} />
                </li>
                <li>
                    <input type="datetime-local" value={ending} onChange={e => setEnding(format(new Date(e.target.value), 'yyyy-MM-dd hh:mm'))} />
                </li>
                <button onClick={() => handleClickDelete}>Apagar</button>
                <button onClick={() => handleClickEdit}>Editar</button>
            </form>
        </section>
    )
}

export default AppointmentCard