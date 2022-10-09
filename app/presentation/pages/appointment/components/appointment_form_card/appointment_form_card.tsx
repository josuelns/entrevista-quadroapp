import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useformatDate } from "~/presentation/hooks";
import { AppDispatch, removeAppointmentRequest, editAppointmentRequest } from "../../../../../main/store";

type ActionParams = 'editar' | 'excluir' | ''

const useAppDispatch = () => useDispatch<AppDispatch>()

import { AppointmentModel } from "~/domain/models"

type Props = {
    Appointment: AppointmentModel
}

export const AppointmentFormCard: React.FC<Props> = ({Appointment }: Props) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [action, setAction] = useState<ActionParams>('')
    
    useEffect(() => {
        reset({
            id: Appointment.id,
            title: Appointment.title,
            started_date: useformatDate(Appointment.started_date),
            ending_date: useformatDate(Appointment.ending_date)
        })
    }, [Appointment])

    const onSubmit = (params: any) => {
        switch (action) {
            case 'editar':
                dispatch(editAppointmentRequest({
                    id: params.id,
                    title: params.title,
                    started_date: useformatDate(params.started_date),
                    ending_date: useformatDate(params.ending_date)
                }))
                reset()
            break;
            case 'excluir':
                dispatch(removeAppointmentRequest({
                    id: params.id,
                }))
            break;
            default:
                return
        }
    }

    return (
        <div>
            <form
            className="appointmentForm"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                {...register("id")}
                type="text"
                hidden
                disabled
            />
            <input
                {...register("title")}
                type="text"
            />
            <input
                {...register("started_date")}
                type="datetime-local"
            />
            <input
                {...register("ending_date")}
                type="datetime-local"
            />
            <input
                className="btnEditAppoitment"
                value={'Editar'}
                onClick={() => setAction('editar')}
                type="submit"
            />
            <input
                className="btnRemoveAppoitment"
                value="Excluir"
                onClick={() => setAction("excluir")}
                type="submit"
            />
        </form>

        </div>
    )
}