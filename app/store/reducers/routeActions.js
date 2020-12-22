import { IS_DRAWER_OPEN } from '../actionTypes';

export function drawerStatus(state = false, { type, data }) {
    switch (type) {
        case IS_DRAWER_OPEN: return data;
        default: return state;
    }
}