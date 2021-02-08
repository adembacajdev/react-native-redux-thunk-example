import {
    FAVOURITES_LOADING, GET_ALL_FAVOURITES, GET_ONE_FAVOURITE, POST_ONE_FAVOURITE, DELETE_ONE_FAVOURITE
} from '../actionTypes';

const _allFavouritesState = {
    isLoading: false,
    data: []
}

export function allFavourites(state = _allFavouritesState, { type, payload }) {
    switch (type) {
        case FAVOURITES_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_FAVOURITES: return { isLoading: false, data: payload };
        default: return state;
    }
}

const _oneFavouriteState = {
    isLoading: false,
    data: {}
}

export function oneFavourite(state = _oneFavouriteState, { type, payload }) {
    switch (type) {
        case FAVOURITES_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_FAVOURITES: return { isLoading: false, data: { ...payload } };
        default: return state;
    }
}