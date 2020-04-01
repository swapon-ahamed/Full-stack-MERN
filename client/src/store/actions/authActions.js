import axios from 'axios'
// import { Route , withRouter} from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import * as types from './types'

import setAutToken from '../../utils/setAuthToken'


export const register = (user, history ) => dispatch => {
    axios.post('/api/users/register', user)
    .then(res => {
        dispatch({
            type: types.SET_ERROR,
            payload: {
                error: {}
            }
        })
        // console.log(res)
        history.push('/login')
    })
    .catch(error => {
       dispatch({
           type: types.SET_ERROR,
           payload: {
               error: error.response.data
           }
       })
    })
}


export const login = (user, history) => dispatch => {
    axios.post('/api/users/login',user)
    .then(res => {
        // console.log(res)

        let token = res.data.token;
        localStorage.setItem('auth_token', token);
        let decodedToken = jwtDecode(token);

        setAutToken(token);

        dispatch({
            type: types.SET_USER,
            payload: {
                user: decodedToken,
                error: {}
            }
        })

        history.push('/')

        /// decode token
        // save token in local storeage
        // set auth header
        // dispatch set user
    })
    .catch(error => {
        // console.log(error.response.data)
        dispatch({
            type: types.SET_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}

export const logout = history => {
    localStorage.removeItem('auth_token');
    history.push('/login')
    return {
        type: types.SET_USER,
        payload: {
            user: {}
        }
    }

}