import { combineReducers } from 'redux'
import { AppointmentReducer } from './add-appointment'

const rootReducer = combineReducers({
    addAppointment: AppointmentReducer
})

export default rootReducer