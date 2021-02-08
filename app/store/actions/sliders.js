import {
    SLIDERS_LOADING, GET_ALL_SLIDERS, GET_ONE_SLIDER, POST_ONE_SLIDER, UPDATE_ONE_SLIDER, DELETE_ONE_SLIDER
} from '../actionTypes';
import axios from 'axios';

export const getAllSliders = () => async (dispatch) => {
    dispatch({ type: SLIDERS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/sliders`);
        if (data.success) {
            dispatch({ type: GET_ALL_SLIDERS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SLIDERS_LOADING, payload: false })
    }
}

export const getOneSlider = (sliderId) => async (dispatch) => {
    dispatch({ type: SLIDERS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/sliders/${sliderId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_SLIDER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SLIDERS_LOADING, payload: false })
    }
}

export const postOneSlider = (body) => async (dispatch) => {
    dispatch({ type: SLIDERS_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/sliders`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_SLIDER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SLIDERS_LOADING, payload: false })
    }
}

export const updateOneSlider = (sliderId, body) => async (dispatch) => {
    dispatch({ type: SLIDERS_LOADING, payload: true })
    try {
        const { data } = await axios.put(`/sliders/${sliderId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_SLIDER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SLIDERS_LOADING, payload: false })
    }
}

export const deleteOneSlider = (sliderId) => async (dispatch) => {
    dispatch({ type: SLIDERS_LOADING, payload: true })
    try {
        const { data } = await axios.delete(`/sliders/${sliderId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_SLIDER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: SLIDERS_LOADING, payload: false })
    }
}