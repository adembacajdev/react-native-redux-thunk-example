import { ALL_SLIDERS, LAST_POSTS, DISCOUNT_POSTS } from '../actionTypes';

export const getAllSliders = (payload) => (dispatch) => {
    dispatch({ type: ALL_SLIDERS, payload })
}

export const getLastPosts = (payload) => (dispatch) => {
    dispatch({ type: LAST_POSTS, payload });
}

export const getDiscountPosts = (payload) => (dispatch) => {
    dispatch({ type: DISCOUNT_POSTS, payload });
}