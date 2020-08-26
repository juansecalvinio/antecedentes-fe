const INITIAL_STATE = {
    persons: [],
    person: {},
}

export function personsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_PERSONS': {
            const { data: persons } = action.payload;
            return {
                ...state,
                persons,
            }
        }
        case 'FETCH_PERSON': {
            const { data: person } = action.payload;
            return {
                ...state,
                person,
            }
        }
    }
}