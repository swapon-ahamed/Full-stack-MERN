import axios from 'axios'
import * as Types from './types'

export const loadTransactions = () => dispatch => {
    axios.get('http://localhost:4000/api/transactions/')
        .then(response => {
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
    axios.post('http://localhost:4000/api/transactions/', transaction)
        .then(response => {
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

export const removeTransaction = id => dispatch => {
    axios.delete(`http://localhost:4000/api/transactions/${id}`)
        .then(response => {
            dispatch({
                type: Types.TRANSACTION_REMOVE,
                payload: {
                    id: response.data._id
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}


export const updateTransaction = (id, transaction) => dispatch => {
    axios.put(`http://localhost:4000/api/transactions/${id}`, transaction)
        .then( response => {
            dispatch({
                type: Types.TRANSACTION_UPDATE,
                payload: {
                    transaction: response.data.transaction
                }
            })
        })
        .catch()
}