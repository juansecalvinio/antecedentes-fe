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
            const { data, error } = response;
            if(data) {
                dispatch(fetchFailure(error));
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
            const { data, error } = response;
            if(data) {
                dispatch(fetchFailure(error));
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
            const { data, error } = response;
            if(data) {
                dispatch(fetchFailure(error));
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
 * POST: /api/persons
 * Params: body
 */
export function insertPerson(body) {
    return async function (dispatch) {
        dispatch({ type: 'LOADING_ON' });
        try {
           const response = await personsServices.registerPerson(body)
           const { data } = response;
           if(data) {
               return data;
           } else {
               let error = response.error.errorMessage;
               dispatch(fetchFailure(error));
               throw error;
           }           
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}

/**
 * Function: chosePerson()
 * Desc: Selecciona y guarda una persona en el store 
 * Params: person => {}
 */
export function chosePerson(person) {
    return function (dispatch) {
        try {
            dispatch({ type: 'FETCH_PERSON', payload: { data: person }})
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}