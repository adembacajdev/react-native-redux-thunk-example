import {
    SIZES_LOADING, GET_ALL_SIZES, GET_ONE_SIZE, POST_ONE_SIZE, UPDATE_ONE_SIZE, DELETE_ONE_SIZE
} from '../actionTypes';

const _allSizesState = {
    isLoading: false,
    data: []
}

export function allSizes(state = _allSizesState, { type, payload }) {
    switch (type) {
        case SIZES_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_SIZES: return { isLoading: false, data: payload };
        default: return state;
    }
}

const _oneSizeState = {
    isLoading: false,
    data: {}
}

export function oneSize(state = _oneSizeState, { type, payload }) {
    switch (type) {
        case SIZES_LOADING: return { ...state, isLoading: payload };
        case GET_ONE_SIZE: return { isLoading: false, data: { ...payload } };
        default: return state;
    }
}