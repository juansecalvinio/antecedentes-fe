import axios from 'axios';
import { setToken, deleteToken, setUser, deleteUser } from '../../helpers/AuthHelpers';
import { fetchFailure } from './appActions';
import { LoginServices } from './../services/loginServices';

const loginServices = new LoginServices();

export function registerUser(payload) {
    return async function (dispatch) {

        const response = await loginServices.registerUser(payload);
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

export function forgetPassword(payload) {
    return async function(dispatch) {
        const response = await loginServices.sendEmailForgetPassword(payload)
        const { data } = response;
        if(data) {
            return data;
        } else {
            let error = response.error.errorMessage;
            dispatch(fetchFailure(error));
            throw error;
        }
    }
}

export function resetPassword(payload) {
    const { userId, token, newPassword } = payload;
    return async function(dispatch) {
        const response = await loginServices.updatePassword(userId, token, newPassword);
        const { data } = response;
        if(data) {
            return data;
        } else {
            let error = response.error.errorMessage;
            dispatch(fetchFailure(error));
            throw error;
        }
    }
}

export function getGoogleUrl() {
    return async function(dispatch) {
        const url = await loginServices.getGoogleUrl();
        if(url) {
            return url;
        } else {
            dispatch({ type: 'LOGIN_OFF' });
            dispatch(fetchFailure(error));
            throw error;
        }
    }
}

export function getGoogleUser() {
    return async function(dispatch) {
        try {
            const response = await loginServices.getGoogleUser();
            const { data, error } = response;
            console.log('data getGoogleUser', data);
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOGIN_OFF' });
            dispatch(fetchFailure(error));
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