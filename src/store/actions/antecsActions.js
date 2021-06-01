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
            const options = [];
            const response = await antecsServices.getAntecs();
            const { data } = response.data;
            if(data) {
                data.map(item => {
                    options.push({
                        value: item['_id'],
                        label: item['name'],
                    })
                })
                dispatch({ type: 'FETCH_ANTECS', payload: { data: options } });
            } else {
                dispatch(fetchFailure('No se encontraron datos de antecedentes'));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}