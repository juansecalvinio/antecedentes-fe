const TOKEN = 'session_token';

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function deleteToken() {
    localStorage.removeItem(TOKEN)
}