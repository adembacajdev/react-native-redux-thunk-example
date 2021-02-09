import {
    FAVOURITES_LOADING, GET_ALL_FAVOURITES, GET_ONE_FAVOURITE, POST_ONE_FAVOURITE, DELETE_ONE_FAVOURITE
} from '../actionTypes';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _allFavouritesState = {
    isLoading: false,
    data: [
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        }
    ]
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