import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { AddAppointment } from '~/domain/usecases'
import { addAppointmentFailure, addAppointmentSuccess } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteAddAppointment
} from '~/main/factories/usecases'

let response: AddAppointment.Model 

const addAppointmentRequest = async (params: AddAppointment.Params) => {
    const addAppointment = makeRemoteAddAppointment
    try {
        const data = await addAppointment.add({...params})
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* addAppointmentData(action: { type: AddAppointment.Params, payload: AddAppointment.Params }) {
    try {
        yield call(addAppointmentRequest, action.payload)
        yield put(addAppointmentSuccess(response))
    } catch (error) {
        yield put(addAppointmentFailure(response))
    }
}

export default all([takeLatest(types.ADD_APPOINTMENT_REQUEST, addAppointmentData)])