import axios from 'axios'
import * as Types from './types'

export const loadTransactions = () => dispatch => {
    axios.get('http://localhost:4000/api/transactions/')
        .then( response => {
            dispatch({
                type: Types.LOAD_TRANSACTIONS,
                payload: {
                    transactions: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const addNewTransaction = transaction => dispatch => {

    console.log(transaction)
    axios.post('http://localhost:4000/api/transactions/',transaction )
        .then( response => {
            dispatch({
                type: Types.CREATE_TRANSACTION,
                payload: {
                    transaction: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })

}