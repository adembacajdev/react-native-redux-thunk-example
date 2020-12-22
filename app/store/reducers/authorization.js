import { SET_IS_LOGGED_IN } from '../actionTypes';

export function isLoggedIn(state = false, { type, data }) {
    switch (type) {
        case SET_IS_LOGGED_IN: return data;
        default: return state;
    }
}