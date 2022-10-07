import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { SearchAppointment } from '~/domain/usecases'
import { searchAppointmentFailure, searchAppointmentSuccess } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteSearchAppointment
} from '~/main/factories/usecases'

let response: SearchAppointment.Model 

const searchAppointmentRequest = async (params: SearchAppointment.Params) => {
    const searchAppointment = makeRemoteSearchAppointment
    try {
        const data = await searchAppointment.search({...params})
        response = data
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* searchAppointmentData(action: { type: string, payload: SearchAppointment.Params }) {
    try {
        yield call(searchAppointmentRequest, action.payload)
        yield put(searchAppointmentSuccess(response))
    } catch (error) {
        yield put(searchAppointmentFailure(response))
    }
}

export const searchAppointmentSaga = all([takeLatest(types.SEARCH_APPOINTMENT_REQUEST, searchAppointmentData)])