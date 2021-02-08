import {
    SIZES_LOADING, GET_ALL_SIZES, GET_ONE_SIZE, POST_ONE_SIZE, UPDATE_ONE_SIZE, DELETE_ONE_SIZE
} from '../actionTypes';
import axios from 'axios';

export const getAllSizes = () => async (dispatch) => {
    dispatch({ type: SIZES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/sizes`);
        if (data.success) {
            dispatch({ type: GET_ALL_SIZES, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SIZES_LOADING, payload: false })
    }
}

export const getOneSize = (sizeId) => async (dispatch) => {
    dispatch({ type: SIZES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/sizes/${sizeId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_SIZE, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SIZES_LOADING, payload: false })
    }
}

export const postOneSize = (body) => async (dispatch) => {
    dispatch({ type: SIZES_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/sizes`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_SIZE, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SIZES_LOADING, payload: false })
    }
}

export const updateOneSize = (sizeId, body) => async (dispatch) => {
    dispatch({ type: SIZES_LOADING, payload: true })
    try {
        const { data } = await axios.put(`/sizes/${sizeId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_SIZE, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SIZES_LOADING, payload: false })
    }
}

export const deleteOneSize = (sizeId) => async (dispatch) => {
    dispatch({ type: SIZES_LOADING, payload: true })
    try {
        const { data } = await axios.delete(`/sizes/${sizeId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_SIZE, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SIZES_LOADING, payload: false })
    }
}