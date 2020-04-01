import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode'
import './index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import setAuthToken from './utils/setAuthToken'

import {Provider} from 'react-redux'
import store from './store'
import * as types from './store/actions/types'


const token = localStorage.getItem('auth_token');

if( token != null){
  let decode = jwtDecode(token);
  setAuthToken(token);
  store.dispatch({
    type: types.SET_USER,
    payload: {
      user: decode
    }
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

