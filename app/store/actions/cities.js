import {
    CITIES_LOADING, GET_ALL_CITIES, GET_ONE_CITY, POST_ONE_CITY, UPDATE_ONE_CITY, DELETE_ONE_CITY
} from '../actionTypes';
import axios from 'axios';

export const getAllCities = () => async (dispatch) => {
    dispatch({ type: CITIES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/cities`);
        if (data.success) {
            dispatch({ type: GET_ALL_CITIES, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CITIES_LOADING, payload: false })
    }
}

export const getOneCity = (cityId) => async (dispatch) => {
    dispatch({ type: CITIES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/cities/${cityId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_CITY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CITIES_LOADING, payload: false })
    }
}

export const postOneCity = (body) => async (dispatch) => {
    dispatch({ type: CITIES_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/cities`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_CITY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CITIES_LOADING, payload: false })
    }
}

export const updateOneCity = (cityId, body) => async (dispatch) => {
    dispatch({ type: CITIES_LOADING, payload: true })
    try {
        const { data } = await axios.put(`/cities/${cityId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_CITY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CITIES_LOADING, payload: false })
    }
}

export const deleteOneCity = (cityId) => async (dispatch) => {
    dispatch({ type: CITIES_LOADING, payload: true })
    try {
        const { data } = await axios.delete(`/cities/${cityId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_CITY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CITIES_LOADING, payload: false })
    }
}