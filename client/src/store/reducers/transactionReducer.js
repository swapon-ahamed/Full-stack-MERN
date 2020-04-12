import * as Types from '../actions/types'

const transactonReducer = (state = [], action) => {
    switch (action.type) {
        case Types.LOAD_TRANSACTIONS: {
            return action.payload.transactions
        }
        case Types.CREATE_TRANSACTION: {
            let trans = [...state];
            trans.unshift(action.payload.transaction)
            // return action.payload.transaction
            return trans;
        }
        case Types.TRANSACTION_REMOVE: {
            let transactions = [...state];
            return transactions.filter(tran => {
                return tran._id !== action.payload.id
            })
        }

        case Types.TRANSACTION_UPDATE: {
            let transactions = [...state];

            return transactions.map(tran => {
                if(tran._id === action.payload.transaction._id){
                    return action.payload.transaction
                }

                return tran;
            })
        }

        default: return state
    }
}

export default transactonReducer