export const loadingOn = () => {
    return {
        type: 'LOADING_ON'
    }
}
export const loadingOff = () => {
    return {
        type: 'LOADING_OFF'
    }
}
export const menuOn = () => {
    return {
        type: 'MENU_ON'
    }
}
export const menuOff = () => {
    return {
        type: 'MENU_OFF'
    }
}
export const fetchFailure = error => {
    return {
        type: 'FETCH_FAILURE',
        payload: { error }
    }
}