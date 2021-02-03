import { GET_ALL_CATEGORY_POSTS } from '../actionTypes';

export const getAllCategoryPosts = (payload) => (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORY_POSTS, payload })
}