import { getToken, getUser } from '../../helpers/AuthHelpers';

const INITIAL_STATE = {
    logged: getToken() ? true : false,
    user: getUser() || {},
    registered: false,
    token: '',
}

export function loginReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOGIN_ON': {
            const { user, token } = action.payload;
            return {
                ...state,
                logged: true,
                user,
                token,
            }
        }
        case 'LOGIN_OFF': {
            return {
                ...state,
                logged: false,
                user: {},
                token: '',
            }
        }
        case 'REGISTER_ON': {
            return {
                ...state,
                registered: true,
            }
        }
        case 'REGISTER_OFF': {
            return {
                ...state,
                registered: false,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}