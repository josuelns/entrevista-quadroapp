import { format } from "date-fns"
import { AppointmentCardModel } from "../model/appointmentCard"

const AppointmentCardView: React.FC<AppointmentCardModel> = ({appointment, handleClickDelete, handleClickEdit}) => {
    return (
        <>   
            <div>
              <li>{appointment.title}</li>
              <li>{format(new Date(appointment.started_date), 'dd-MM-yyyy hh:mm')}</li>
              <li>{format(new Date(appointment.ending_date), 'dd-MM-yyyy hh:mm')}</li>
              <button onClick={() => handleClickDelete}>Apagar</button>
              <button onClick={() => handleClickEdit}>Editar</button>
            </div>
        </>
    )
}

export default AppointmentCardView