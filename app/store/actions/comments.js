import {
    COMMENTS_LOADING, GET_ALL_COMMENTS_PER_POST, GET_ALL_COMMENTS_PER_USER, GET_ONE_COMMENTS, POST_ONE_COMMENTS, UPDATE_ONE_COMMENTS, DELETE_ONE_COMMENTS
} from '../actionTypes';
import axios from 'axios';

export const getAllCommentsPerPosts = (postId) => async (dispatch) => {
    dispatch({ type: COMMENTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/comments/post/${postId}`);
        if (data.success) {
            dispatch({ type: GET_ALL_COMMENTS_PER_POST, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: COMMENTS_LOADING, payload: false })
    }
}

export const getAllCommentsPerUser = (userId) => async (dispatch) => {
    dispatch({ type: COMMENTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/comments/user/${userId}`);
        if (data.success) {
            dispatch({ type: GET_ALL_COMMENTS_PER_USER, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: COMMENTS_LOADING, payload: false })
    }
}

export const getOneComment = (commentId) => async (dispatch) => {
    dispatch({ type: COMMENTS_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/comments/${commentId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_COMMENTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: COMMENTS_LOADING, payload: false })
    }
}

export const postOneComment = (body) => async (dispatch) => {
    dispatch({ type: COMMENTS_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/comments`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_COMMENTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: COMMENTS_LOADING, payload: false })
    }
}

export const updateOneComment = (commentId, body) => async (dispatch) => {
    dispatch({ type: COMMENTS_LOADING, payload: true })
    try {
        const { data } = await axios.put(`/comments/${commentId}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ONE_COMMENTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: COMMENTS_LOADING, payload: false })
    }
}

export const deleteOneComment = (commentId) => async (dispatch) => {
    dispatch({ type: COMMENTS_LOADING, payload: true })
    try {
        const { data } = await axios.delete(`/comments/${commentId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_COMMENTS, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: COMMENTS_LOADING, payload: false })
    }
}