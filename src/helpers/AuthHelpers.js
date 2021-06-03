const TOKEN = 'session_token';
const USER = 'session_user';

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function deleteToken() {
    localStorage.removeItem(TOKEN)
}

export function setUser(user) {
    localStorage.setItem(USER, user);
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function deleteUser() {
    localStorage.removeItem(USER);
}