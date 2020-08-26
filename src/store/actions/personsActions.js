import { PersonsServices } from './../services/personsServices';
import { fetchFailure } from './../actions/appActions';

const personsServices = new PersonsServices();

/**
 * Function: fetchPersons()
 * Desc: Obtiene las personas del metodo GET: /api/persons
 * Params: null
 */
export function fetchPersons() {
    return async function (dispatch) {
        try {
            const response = await personsServices.getPersons();
            const { data } = response;
            if(data) {
                dispatch({ type: 'FETCH_PERSONS', payload: { data } });
            } else {
                dispatch(fetchFailure('No se encontraron datos de personas'));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}