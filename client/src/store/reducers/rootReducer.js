import { combineReducers } from 'redux'
import authReducer from './authReducer'

const rootReducter = combineReducers({
    auth: authReducer
})

export default rootReducter