import axios from 'axios';
import { setToken, getToken, deleteToken } from '../../helpers/AuthHelpers';
import { fetchFailure, loadingOn, loadingOff } from './appActions';

export function registerUser(payload) {
    return async function (dispatch) {

        const response = await axios.post("/auth/sign-up", payload);
        const { data } = response;
        if(data) {
            dispatch({ type: 'REGISTER_ON', payload: { data } });
        } else {
            let error = response.error.errorMessage;
            dispatch({ type: 'REGISTER_OFF' });
            dispatch({ type: 'LOGIN_OFF' });
            dispatch(fetchFailure(error));
            throw error;
        }
        
    }
}

export function loginUser(payload) {
    return async function(dispatch) {

        const response = await axios.post("/auth/sign-in", payload);
        const { data } = response;
        if(data) {
            dispatch({ type: 'LOGIN_ON', payload: data });
            setToken(data.token);
        } else {
            let error = response.error.errorMessage;
            deleteToken();
            dispatch({ type: 'LOGIN_OFF' });
            dispatch(fetchFailure(error));
            throw error;
        }

        // try {
        // } catch (error) {
        //     dispatch({ type: 'LOGIN_OFF' });
        //     dispatch(fetchFailure(error));
        // }
    }
}

export function logoutUser() {
    return function(dispatch) {
        deleteToken();
        dispatch({ type: 'LOADING_ON' });
        dispatch({ type: 'LOGIN_OFF' });
        setTimeout(()=> dispatch({ type: 'LOADING_OFF' }), 1500);
    }
}