import { combineReducers } from 'redux'
import { AddAppointmentReducer } from './add-appointment'
import { EditAppointmentReducer } from './edit-appointment'
import { LoadAppointmentReducer } from './load-appointment'
import { OrderAppointmentReducer } from './order-appointment'
import { RemoveAppointmentReducer } from './remove-appointment'
import { SearchAppointmentReducer } from './search-appointment'

const rootReducer = combineReducers({
    addAppointment: AddAppointmentReducer,
    editAppointment: EditAppointmentReducer,
    LoadAppointment: LoadAppointmentReducer,
    OrderAppointment: OrderAppointmentReducer,
    RemoveAppointment: RemoveAppointmentReducer,
    SearchAppointment: SearchAppointmentReducer
})

export default rootReducer