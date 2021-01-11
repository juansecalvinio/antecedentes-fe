import axios from 'axios';
import { fetchFailure } from './appActions';

export function registerUser(payload, redirectUrl) {
    return async function (dispatch) {
        try {
            const response = await axios.post("/auth/sign-up", payload);
            const { data } = response;
            if(data) {
                dispatch({ type: 'REGISTER_REQUEST', payload: { data } });
                window.location.href = redirectUrl;
            } else {
                dispatch(fetchFailure('No se ha podido completar el registro'));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}

export function loginUser(payload, redirectUrl) {
    return async function(dispatch) {
        try {
            const response = await axios.post("/auth/sign-in", payload);
            const { data } = response;
            if(data) {
                dispatch({ type: 'LOGIN_REQUEST', payload: { data } });
                window.location.href = redirectUrl;
            } else {
                dispatch(fetchFailure("No se ha realizar el ingreso"));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}