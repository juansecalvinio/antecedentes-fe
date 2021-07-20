import Cookie from 'universal-cookie';
export const TOKEN = 'session_token';
export const USER = 'session_user';
export const GOOGLE_USER = 'google_user';

const cookie = new Cookie();

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    if(typeof localStorage.getItem(TOKEN) !== "undefined") {
        return localStorage.getItem(TOKEN);
    } else {
        return false;
    }
}

export function deleteToken() {
    localStorage.removeItem(TOKEN)
}

export function setUser(user) {
    localStorage.setItem(USER, user);
}

export function getUser() {
    // Buscar primero el cookie de googleUser, y sino, el usuario de Mongo
    const cookieUser = cookie.get(GOOGLE_USER);
    if(typeof cookieUser !== "undefined") {
        cookie.set(GOOGLE_USER, cookieUser, {
            maxAge: 900000,
            // httpOnly: false,
            // secure: true,
            // sameSite: 'none',
        })
        return cookieUser;
    } else if(typeof localStorage.getItem(USER) !== "undefined") {
        return JSON.parse(localStorage.getItem(USER));
    } else {
        return false;
    }
}

export function deleteUser() {
    cookie.remove(GOOGLE_USER);
    localStorage.removeItem(USER);
}