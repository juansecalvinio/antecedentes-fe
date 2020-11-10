const INITIAL_STATE = {
    antecs: [],
    antec: {},
}

export function antecsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_ANTECS': {
            const { data: antecs } = action.payload;
            return {
                ...state,
                antecs,
            }
        }
        case 'FETCH_ANTEC': {
            const { data: antec } = action.payload;
            return {
                ...state,
                antec,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}