import { PersonsServices } from './../services/personsServices';
import { fetchFailure } from './../actions/appActions';
import config from './../../config/config';

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

/**
 * Function: fetchPersonById()
 * Desc: Obtiene una persona por id del metodo GET: /api/persons/id/:id
 * Params: id
 */
export function fetchPersonById(id) {
    return async function (dispatch) {
        try {
            if(!id) {
                throw 'No se encontraron datos para buscar';
            }
            const response = await personsServices.getPersonById(id);
            const { data } = response;
            if(data) {
                dispatch({ type: 'FETCH_PERSON', payload: { data } });
            } else {
                dispatch(fetchFailure('No se encontraron datos de ninguna persona'));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}

/**
 * Function: fetchPersonByCuit()
 * Desc: Obtiene una persona por CUIT, del metodo GET: /api/persons/cuit/:cuit
 * Params: cuit
 */
export function fetchPersonByCuit(cuit) {
    return async function (dispatch) {
        try {
            if(!cuit) {
                throw 'No se encontraron datos para buscar';
            }
            const response = await personsServices.getPersonByCuit(cuit);
            const { data } = response;
            if(data) {
                dispatch({ type: 'FETCH_PERSON', payload: { data } });
            } else {
                dispatch(fetchFailure('No se encontraron datos de ninguna persona'));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}

/**
 * Function: insertPerson()
 * Desc: Registra una persona en la base de datos 
 * POST: /api/persons && /api/persons-antecs
 * Params: personData, antecsData
 */
export function insertPerson(personData, antecsData) {
    console.log('insertPerson: ', JSON.stringify(personData));
    return function (dispatch) {
        dispatch({ type: 'LOADING_ON' });
        try {
            // if(!personData || !antecsData) {
            //     throw 'No se encontraron datos para registrar';
            // }
            // TODO: Hacer primero el await a registerPerson() y dentro del then() hacer registerPersonAntecs()
            return new Promise((resolve, reject) => {
                fetch(`${config.api.url}/persons`, {
                    method: 'post',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(personData)
                })
                .then(response => {
                    console.log(response);
                    // if(!response.ok) {
                    //     throw 'Ocurrió un error, intente nuevamente';
                    // }
                    // return response.json();
                })
                .then(data => {
                    dispatch({ type: 'LOADING_OFF' });
                    console.log(data);
                })
                .catch(error => {
                    console.error(error)
                    dispatch({ type: 'LOADING_OFF' });
                    dispatch(fetchFailure(error))
                })
            })
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}