import { ALL_SLIDERS, ALL_SLIDERS_LOADING, LAST_POSTS, LAST_POSTS_LOADING, DISCOUNT_POSTS, DISCOUNT_POSTS_LOADING } from '../actionTypes';
import axios from 'axios';

export const getAllSliders = (payload) => async (dispatch) => {
    dispatch({ type: ALL_SLIDERS_LOADING, payload: true })
    try {
        const { data } = await axios.get('/sliders')
        if (data.success) {
            dispatch({ type: ALL_SLIDERS, payload: data?.data })
        }
    } catch (e) {
        console.log('e', e.message)
        dispatch({ type: ALL_SLIDERS_LOADING, payload: false })
    }
}

export const getLastPosts = (payload) => async (dispatch) => {
    dispatch({ type: LAST_POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get('/posts/new-arrives')
        if (data.success) {
            console.log('lastPosts', data)
            dispatch({ type: LAST_POSTS, payload: data?.data })
        }
    } catch (e) {
        console.log('e', e.message)
        dispatch({ type: LAST_POSTS_LOADING, payload: false })
    }
}

export const getDiscountPosts = (payload) => async (dispatch) => {
    dispatch({ type: DISCOUNT_POSTS_LOADING, payload: true })
    try {
        const { data } = await axios.get('/posts/discounts')
        if (data.success) {
            console.log('discounts', data)
            dispatch({ type: DISCOUNT_POSTS, payload: data?.data })
        }
    } catch (e) {
        console.log('e', e.message)
        dispatch({ type: DISCOUNT_POSTS_LOADING, payload: false })
    }
}