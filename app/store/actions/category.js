import {
    GET_ALL_CATEGORY_POSTS, GET_ONE_CATEGORY, UPDATE_ONE_CATEGORY, POST_ONE_CATEGORY, DELETE_ONE_CATEGORY, CATEGORIES_LOADING
} from '../actionTypes';
import axios from 'axios';

export const getAllCategoryPosts = () => async (dispatch) => {
    dispatch({ type: CATEGORIES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/categories`);
        if (data.success) {
            dispatch({ type: GET_ALL_CATEGORY_POSTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CATEGORIES_LOADING, payload: false })
    }
}

export const getOneCategoryPosts = (categoryId) => async (dispatch) => {
    dispatch({ type: CATEGORIES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/categories/${categoryId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_CATEGORY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CATEGORIES_LOADING, payload: false })
    }
}

export const updateOneCategory = (categoryId, body) => async (dispatch) => {
    dispatch({ type: CATEGORIES_LOADING, payload: true })
    try {
        const { data } = await axios.put(`/categories/${categoryId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_CATEGORY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CATEGORIES_LOADING, payload: false })
    }
}

export const postOneCategory = (body) => async (dispatch) => {
    dispatch({ type: CATEGORIES_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/categories`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_CATEGORY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CATEGORIES_LOADING, payload: false })
    }
}

export const deleteOneCategory = (categoryId) => async (dispatch) => {
    dispatch({ type: CATEGORIES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/categories/${categoryId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_CATEGORY, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: CATEGORIES_LOADING, payload: false })
    }
}