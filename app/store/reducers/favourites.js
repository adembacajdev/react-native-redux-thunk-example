import {
    FAVOURITES_LOADING, GET_ALL_FAVOURITES, GET_ONE_FAVOURITE, POST_ONE_FAVOURITE, DELETE_ONE_FAVOURITE
} from '../actionTypes';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _allFavouritesState = {
    isLoading: false,
    data: []
}

export function allFavourites(state = _allFavouritesState, { type, payload }) {
    switch (type) {
        case FAVOURITES_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_FAVOURITES: return { isLoading: false, data: payload };
        case POST_ONE_FAVOURITE: return { isLoading: false, data: [...state.data, payload] };
        case DELETE_ONE_FAVOURITE:
            let removeFavourite = state.data.filter(item => item?.post_id !== payload);
            return { isLoading: false, data: removeFavourite }
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