import { MakeAppointment } from '~/main/factories/pages'
import { Provider } from 'react-redux';
import store from '../store';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

//todo arrumar navegação
export const Routes = () => {
    return (
        <Provider store={store}>
            <MakeAppointment />
        </Provider>
    )
}
