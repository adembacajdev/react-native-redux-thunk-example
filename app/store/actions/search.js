import { SEARCH_POSTS } from '../actionTypes';

export const getSearchPosts = (payload) => (dispatch) => {
    dispatch({ type: SEARCH_POSTS, payload })
}