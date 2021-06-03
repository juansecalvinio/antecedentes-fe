import axios from 'axios';
import { setToken, deleteToken, setUser, deleteUser } from '../../helpers/AuthHelpers';
import { fetchFailure } from './appActions';

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
            console.log('response login data', data);
            const { token, user } = data;
            setToken(token);
            setUser(JSON.stringify(user));
            dispatch({ type: 'LOGIN_ON', payload: data });
        } else {
            let error = response.error.errorMessage;
            deleteToken();
            deleteUser();
            dispatch({ type: 'LOGIN_OFF' });
            dispatch(fetchFailure(error));
            throw error;
        }
    }
}

export function getGoogleUrl() {
    return async function(dispatch) {
        const url = await axios.get("/auth/google/url");
        if(url) {
            return url;
        } else {
            dispatch({ type: 'LOGIN_OFF' });
            dispatch(fetchFailure(error));
            throw error;
        }
    }
}

export function logoutUser() {
    return function(dispatch) {
        deleteToken();
        deleteUser();
        dispatch({ type: 'LOADING_ON' });
        dispatch({ type: 'LOGIN_OFF' });
        setTimeout(()=> dispatch({ type: 'LOADING_OFF' }), 1500);
    }
}