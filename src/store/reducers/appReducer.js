const INITIAL_STATE = {
    loading: false,
    errorFailure: '',
    menu: false,
}

export function appReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOADING_ON': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'LOADING_OFF': {
            return {
                ...state,
                loading: false,
            }
        }
        case 'MENU_ON': {
            return {
                ...state,
                menu: true,
            }
        }
        case 'MENU_OFF': {
            return {
                ...state,
                menu: false,
            }
        }
        case 'FETCH_FAILURE': {
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                menu: false,
                errorFailure: error
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}