import { SET_IS_LOGGED_IN, SET_ACCOUNT_TYPE, LOGIN, LOGOUT } from '../actionTypes';

const _isLoggedInState = {
    isLoading: false,
    status: false
}

export function isLoggedIn(state = _isLoggedInState, { type, payload }) {
    switch (type) {
        case LOGIN: return payload;
        case LOGOUT:
        console.log('hini logout')
        return { isLoading: false, status: false };
        default: return state;
    }
}

export function accountType(state = 0, { type, payload }) {
    switch (type) {
        case SET_ACCOUNT_TYPE: return payload;
        default: return state;
    }
}