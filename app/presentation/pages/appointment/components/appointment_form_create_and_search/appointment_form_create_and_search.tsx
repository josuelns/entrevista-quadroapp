import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useformatDate } from "~/presentation/hooks";
import { AppDispatch, addAppointmentRequest, searchAppointmentRequest, loadAppointmentRequest } from "../../../../../main/store";

type ActionParams = 'agendar' | 'pesquisar' | ''

const useAppDispatch = () => useDispatch<AppDispatch>()

export const AppointmentFormCreateAndSearch = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [action, setAction] = useState<ActionParams>('')
    const onSubmit = (params: any) => {
        switch (action) {
            case 'agendar':
                dispatch(addAppointmentRequest({
                    title: params.title,
                    started_date: useformatDate(params.started_date),
                    ending_date: useformatDate(params.ending_date)
                }))
                reset()
            break;
            case 'pesquisar':
                dispatch(searchAppointmentRequest({
                    title: params.title,
                    started_date: useformatDate(params.started_date),
                    ending_date: useformatDate(params.ending_date)
                }))
            break;
            default:
                dispatch(loadAppointmentRequest()) 
                reset()
            break;
        }
    }

    return (
        <form
            className="appointmentForm"
            onSubmit={handleSubmit(onSubmit)}
        >
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
                className="btnAddAppoitment"
                value={'Agendar'}
                onClick={() => setAction('agendar')}
                type="submit"
            />
            <input
                className="btnSearchAppoitment"
                value="Pesquisar"
                onClick={() => setAction("pesquisar")}
                type="submit"
            />
            <input
                className="btnCleanFormAppoitment"
                value="Limpar"
                onClick={() => setAction("")}
                type="submit"
            />
        </form>
    )
}