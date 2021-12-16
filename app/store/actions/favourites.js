import {
    FAVOURITES_LOADING, GET_ALL_FAVOURITES, GET_ONE_FAVOURITE, POST_ONE_FAVOURITE, DELETE_ONE_FAVOURITE
} from '../actionTypes';
import axios from 'axios';
import Storage from '../../services/Storage';

export const getAllFavourites = () => async (dispatch) => {
    const userId = await Storage.getUserId();
    dispatch({ type: FAVOURITES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/favourites/user/${userId}`);
        if (data.success) {
            dispatch({ type: GET_ALL_FAVOURITES, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: FAVOURITES_LOADING, payload: false })
    }
}

export const getOneFavourites = (favouriteId) => async (dispatch) => {
    dispatch({ type: FAVOURITES_LOADING, payload: true })
    try {
        const { data } = await axios.get(`/favourites/${favouriteId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_FAVOURITE, payload: data.data })
        }
    } catch (e) {
        dispatch({ type: FAVOURITES_LOADING, payload: false })
    }
}

export const postOneFavourite = (body) => async (dispatch) => {
    dispatch({ type: FAVOURITES_LOADING, payload: true })
    try {
        const { data } = await axios.post(`/favourites`, body);
        if (data.success) {
            dispatch({ type: POST_ONE_FAVOURITE, payload: data?.data })
        }
    } catch (e) {
        dispatch({ type: FAVOURITES_LOADING, payload: false })
    }
}

export const deleteOneFavourites = (postId) => async (dispatch) => {
    dispatch({ type: FAVOURITES_LOADING, payload: true })
    try {
        const { data } = await axios.delete(`/favourites/${postId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_FAVOURITE, payload: postId })
        }
    } catch (e) {
        dispatch({ type: FAVOURITES_LOADING, payload: false })
    }
}