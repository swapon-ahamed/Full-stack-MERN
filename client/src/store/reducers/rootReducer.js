import { combineReducers } from 'redux'
import authReducer from './authReducer'
import transactonReducer from './transactionReducer'

const rootReducter = combineReducers({
    auth: authReducer,
    transactions: transactonReducer
})

export default rootReducter