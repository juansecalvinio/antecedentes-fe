import { AntecsServices } from '../services/antecsServices';
import { fetchFailure } from './appActions';

const antecsServices = new AntecsServices();

/**
 * Function: fetchAntecs()
 * Desc: Obtiene los antecedentes del metodo GET: /api/antecs
 * Params: null
 */
export function fetchAntecs() {
    return async function (dispatch) {
        try {
            const response = await antecsServices.getAntecs();
            const { data } = response;
            if(data) {
                dispatch({ type: 'FETCH_ANTECS', payload: { data } });
            } else {
                dispatch(fetchFailure('No se encontraron datos de antecedentes'));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}