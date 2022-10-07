import React from 'react'
import Appointment from '~/presentation/pages/appointment/appointment'
import {
    makeRemoteAddAppointment,
    makeRemoteEditAppointment,
    makeRemoteLoadAppointment,
    makeRemoteOrderAppointment,
    makeRemoteRemoveAppointment,
    makeRemoteSearchAppointment,
    makeRemoteSearchDateIntervalAppointment
} from '~/main/factories/usecases'
export const MakeAppointment: React.FC = () => {
  return (
    <Appointment
        addAppointment={makeRemoteAddAppointment}
        editAppointment={makeRemoteEditAppointment}
        loadAppointment={makeRemoteLoadAppointment}
        orderAppointment={makeRemoteOrderAppointment}
        removeAppointment={makeRemoteRemoveAppointment}
        searchAppointment={makeRemoteSearchAppointment}
    />
  )
}