import { IS_DRAWER_OPEN, SET_CURRENT_ROUTE } from '../actionTypes';

export function drawerStatus(state = false, { type, data }) {
    switch (type) {
        case IS_DRAWER_OPEN: return data;
        default: return state;
    }
}

export function currentRoute(state = '', { type, data }) {
    switch (type) {
        case SET_CURRENT_ROUTE: return data;
        default: return state;
    }
}