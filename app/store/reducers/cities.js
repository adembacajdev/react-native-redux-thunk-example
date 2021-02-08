import {
    CITIES_LOADING, GET_ALL_CITIES, GET_ONE_CITY, POST_ONE_CITY, UPDATE_ONE_CITY, DELETE_ONE_CITY
} from '../actionTypes';

const _allCitiesState = {
    isLoading: false,
    data: []
}

export function allCities(state = _allCitiesState, { type, payload }) {
    switch (type) {
        case CITIES_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_CITIES: return { isLoading: false, data: payload };
        default: return state;
    }
}

const _oneCityState = {
    isLoading: false,
    data: {}
}

export function oneCity(state = _oneCityState, { type, payload }) {
    switch (type) {
        case CITIES_LOADING: return { ...state, isLoading: payload };
        case GET_ONE_CITY: return { isLoading: false, data: { ...payload } };
        default: return state;
    }
}