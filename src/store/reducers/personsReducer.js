const INITIAL_STATE = {
    persons: [],
    person: {},
}

export function personsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_PERSONS': {
            return {
                ...state,
                persons: action.payload.data.data,
            }
        }
        case 'FETCH_PERSON': {
            return {
                ...state,
                person: action.payload.data.data,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}