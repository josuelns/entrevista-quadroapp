import { AppointmentCardModel } from "../model/appointmentCard"
import AppointmentCardView from "../view/appointmentCard"

const AppointmentCardController: React.FC<AppointmentCardModel> = ({appointment}) => {
    function handleClickDelete(){

    }
    function handleClickEdit(){

    }

    return (
       <AppointmentCardView 
            appointment={appointment}
            handleClickDelete={handleClickDelete}
            handleClickEdit={handleClickEdit}
       />
    )
}

export default AppointmentCardController