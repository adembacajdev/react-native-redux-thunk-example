import {
    POSTS_LOADING, GET_ALL_POSTS, GET_ONE_POST, GET_DISCOUNT_POSTS, GET_LAST_POSTS, GET_RENT_POSTS, UPDATE_ONE_POST,
    POST_ONE_POST, DELETE_ONE_POST, GET_ALL_MY_POSTS
} from '../actionTypes';
import axios from 'axios';

export const getAllPosts = () => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/posts`);
        if (data.success) {
            dispatch({ type: GET_ALL_POSTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const getAllMyPosts = (userId) => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/posts/user/${userId}`);
        if (data.success) {
            dispatch({ type: GET_ALL_MY_POSTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const getOnePosts = (postId) => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/posts/${postId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_POST, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const getDiscountPosts = () => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/posts/discounts`);
        if (data.success) {
            dispatch({ type: GET_DISCOUNT_POSTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const getLastPosts = () => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/posts/new-arrives`);
        if (data.success) {
            dispatch({ type: GET_LAST_POSTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const getRentPosts = () => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/posts/for-rent`);
        if (data.success) {
            dispatch({ type: GET_RENT_POSTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const postOnePost = (body) => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/posts`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_POST, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const updateOnePost = (postId, body) => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.put(`/posts/${postId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_POST, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}

export const deleteOnePost = (postId) => async (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.delete(`/posts/${postId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_POST, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: POSTS_LOADING, payload: false })
    }
}