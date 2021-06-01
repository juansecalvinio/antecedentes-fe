const INITIAL_STATE = {
    antecs: [],
    antec: {},
}

export function antecsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_ANTECS': {
            const { data } = action.payload;
            return {
                ...state,
                antecs: data,
            }
        }
        case 'FETCH_ANTEC': {
            const { data } = action.payload;
            return {
                ...state,
                antec: data,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}