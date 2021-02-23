import { GET_ALL_SHOPS } from '../actionTypes';

const _allShopsState = {
    isLoading: false,
    data: []
}

export function allShops(state = _allShopsState, { type, payload }) {
    switch (type) {
        case GET_ALL_SHOPS: return payload;
        default: return state;
    }
}