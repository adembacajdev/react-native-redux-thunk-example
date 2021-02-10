import {
    USERS_LOADING, GET_ALL_USERS, GET_ONE_USER, POST_ONE_USER, UPDATE_ONE_USER, DELETE_ONE_USER, GET_MY_PROFILE
} from '../actionTypes';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: USERS_LOADING, payload: true });
    try {
        const { data } = await axios.get(`/users`);
        if (data.success) {
            dispatch({ type: GET_ALL_USERS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: USERS_LOADING, payload: false });
    }
}

export const getOneUser = (userId) => async (dispatch) => {
    dispatch({ type: USERS_LOADING, payload: true });
    try {
        const { data } = await axios.get(`/users/${userId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_USER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: USERS_LOADING, payload: false });
    }
}

export const getMyprofile = (userId) => async (dispatch) => {
    dispatch({ type: USERS_LOADING, payload: true });
    try {
        const { data } = await axios.get(`/users/${userId}`);
        if (data.success) {
            dispatch({ type: GET_MY_PROFILE, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: USERS_LOADING, payload: false });
    }
}

export const postOneUser = (body) => async (dispatch) => {
    dispatch({ type: USERS_LOADING, payload: { isLoading: true, data: {}, posted: false } });
    try {
        const { data } = await axios.post(`/users`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_USER, payload: { isLoading: false, data: data.data, posted: true } })
        }
    } catch (e) {
        dispatch({ type: USERS_LOADING, payload: { isLoading: false, data: {}, posted: false } });
    }
}

export const updateOneUser = (userId, body) => async (dispatch) => {
    dispatch({ type: USERS_LOADING, payload: true });
    try {
        const { data } = await axios.put(`/users/${userId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_USER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: USERS_LOADING, payload: false });
    }
}

export const deleteOneUser = (userId) => async (dispatch) => {
    dispatch({ type: USERS_LOADING, payload: true });
    try {
        const { data } = await axios.delete(`/users/${userId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_USER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: USERS_LOADING, payload: false });
    }
}