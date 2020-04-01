import * as types from '../actions/types';

const init = {
    isAutenticated: false,
    user: {},
    error: {}
}


const authReducer = (state = init, action) =>  {
    switch (action.type) {
        case types.SET_USER: {
            return {
                user: action.payload.user,
                isAutenticated: Object.keys(action.payload.user).length !== 0,
                error: {}
            }
        }

        case types.SET_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }

        default: {
            return state;
        }
    }
};

export default authReducer;