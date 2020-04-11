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

        default: return state
    }
}

export default transactonReducer