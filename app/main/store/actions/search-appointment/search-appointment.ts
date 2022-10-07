import { SearchAppointment } from '~/domain/usecases'
import * as types from '../../types'

export function searchAppointmentRequest(params: SearchAppointment.Params): {
    type: string
    payload: SearchAppointment.Params
} {
    return {
        type: types.SEARCH_APPOINTMENT_REQUEST,
        payload: params
    }
}
export function searchAppointmentSuccess(response: SearchAppointment.Model): {
    type: string
    payload: SearchAppointment.Model
} {
    return {
        type: types.SEARCH_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function searchAppointmentFailure(response: SearchAppointment.Model): {
    type: string
    payload: SearchAppointment.Model
} {
    return {
        type: types.SEARCH_APPOINTMENT_FAILURE,
        payload: response
    }
}