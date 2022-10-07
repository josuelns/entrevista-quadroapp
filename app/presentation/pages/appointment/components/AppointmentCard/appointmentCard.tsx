import { format } from "date-fns"
import { useState } from "react"
import { AppointmentModel } from "~/domain/models"
import { useformatDate } from "~/presentation/hooks"

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
        const edit = async () => {
            try {
                const data = await EditAppointment.edit(
                    {
                        id: Appointment.id,
                        title: title,
                        started_date: started,
                        ending_date: ending
                    }
                )
            }
            catch (error) {
                console.log(error)
            }
        }
        edit()
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
        const remove = async () => {
            try {
                const data = await RemoveAppointment.remove({id: Appointment.id,})
            }
            catch (error) {
                console.log(error)
            }
        }
        remove()
    }

    return (
        <section>
            <form onSubmit={e => e.preventDefault()}>
                <li>
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                </li>
                <li>
                    <input type="datetime-local" value={useformatDate(started)} onChange={e => setStarded(useformatDate(e.target.value))} />
                </li>
                <li>
                    <input type="datetime-local" value={useformatDate(ending)} onChange={e => setEnding(useformatDate(e.target.value))} />
                </li>
                <button type="button" onClick={() => handleClickDelete()}>Apagar</button>
                <button type="button" onClick={() => handleClickEdit()}>Editar</button>
            </form>
        </section>
    )
}

export default AppointmentCard