import { SET_IS_LOGGED_IN, SET_ACCOUNT_TYPE } from '../actionTypes';

export function isLoggedIn(state = false, { type, payload }) {
    switch (type) {
        case SET_IS_LOGGED_IN: return payload;
        default: return state;
    }
}

export function accountType(state = 0, { type, payload }) {
    switch (type) {
        case SET_ACCOUNT_TYPE: return payload;
        default: return state;
    }
}