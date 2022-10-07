import {MakeAppointment} from '~/main/factories/pages'
import { Provider } from 'react-redux';
import store from '../store';


export default function Index() {
  return (
    <Provider store={store}>
      <MakeAppointment />
    </Provider>
  )
}
