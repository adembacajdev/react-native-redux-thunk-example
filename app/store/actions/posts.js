import {
    POSTS_LOADING, GET_ALL_POSTS, GET_ONE_POST, GET_DISCOUNT_POSTS, GET_LAST_POSTS, GET_RENT_POSTS, UPDATE_ONE_POST,
    POST_ONE_POST, DELETE_ONE_POST, GET_ALL_MY_POSTS, GET_ALL_POSTS_BY_CATEGORY
} from '../actionTypes';
import axios from 'axios';

export const getAllPosts = () => async (dispatch) => {
    dispatch({ type: GET_ALL_POSTS, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get(`/posts`);
        if (data.success) {
            dispatch({ type: GET_ALL_POSTS, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_ALL_POSTS, payload: { isLoading: false, data: [] } })
    }
}

export const getAllMyPosts = (userId) => async (dispatch) => {
    dispatch({ type: GET_ALL_MY_POSTS, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get(`/posts/user/${userId}`);
        if (data.success) {
            dispatch({ type: GET_ALL_MY_POSTS, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_ALL_MY_POSTS, payload: { isLoading: false, data: [] } })
    }
}

export const getAllPostsByCategory = (categoryId) => async (dispatch) => {
    dispatch({ type: GET_ALL_POSTS_BY_CATEGORY, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get(`/posts/category/${categoryId}`);
        if (data.success) {
            dispatch({ type: GET_ALL_POSTS_BY_CATEGORY, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_ALL_POSTS_BY_CATEGORY, payload: { isLoading: false, data: [] } })
    }
}

export const getOnePosts = (postId) => async (dispatch) => {
    dispatch({ type: GET_ONE_POST, payload: { isLoading: true, data: {} } })
    try {
        const { data } = await axios.get(`/posts/${postId}`);
        if (data.success) {
            dispatch({ type: GET_ONE_POST, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_ONE_POST, payload: { isLoading: false, data: {} } })
    }
}

export const getDiscountPosts = () => async (dispatch) => {
    dispatch({ type: GET_DISCOUNT_POSTS, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get(`/posts/discounts`);
        if (data.success) {
            dispatch({ type: GET_DISCOUNT_POSTS, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_DISCOUNT_POSTS, payload: { isLoading: false, data: [] } })
    }
}

export const getLastPosts = () => async (dispatch) => {
    dispatch({ type: GET_LAST_POSTS, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get(`/posts/new-arrives`);
        if (data.success) {
            dispatch({ type: GET_LAST_POSTS, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_LAST_POSTS, payload: { isLoading: false, data: [] } })
    }
}

export const getRentPosts = () => async (dispatch) => {
    dispatch({ type: GET_RENT_POSTS, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get(`/posts/for-rent`);
        if (data.success) {
            dispatch({ type: GET_RENT_POSTS, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_RENT_POSTS, payload: { isLoading: false, data: [] } })
    }
}

export const postOnePost = (user_id, images, _body) => async (dispatch) => {
    dispatch({ type: POST_ONE_POST, payload: { isLoading: true, posted: false, data: {} } })
    try {
        const { data } = await axios.post(`/posts`, { ..._body, user_id });
        if (data.success) {
            let newBody = new FormData();
            newBody.append('post_id', data?.data?._id)
            images.forEach(image => {
                newBody.append('images', image)
            })
            const postImage = await axios.patch(`/posts/upload`, newBody, { headers: { 'Content-Type': 'multipart/formdata' } })
            if (postImage.data.success) {
                dispatch({ type: POST_ONE_POST, payload: { isLoading: false, posted: true, data: data.data } })
                setTimeout(() => {
                    dispatch({ type: POST_ONE_POST, payload: { isLoading: false, posted: false, data: data.data } })
                }, 1000)
            }
        }
    } catch (e) {
        dispatch({ type: POST_ONE_POST, payload: { isLoading: false, posted: false, data: {} } })
    }
}

export const updateOnePost = (postId, images, body, navigation) => async (dispatch) => {
    let newImages = images.filter(item => item.isNew === true);
    let oldImages = images.filter(item => !item.isNew);
    dispatch({ type: UPDATE_ONE_POST, payload: { isLoading: true, data: {} } })
    let newBody = { ...body, images: oldImages }
    try {
        const { data } = await axios.put(`/posts/${postId}`, newBody);
        console.log({data, body})
        if (data.success) {
            if (newImages.length > 0) {
                let newBody = new FormData();
                newBody.append('post_id', postId)
                newImages.forEach(image => {
                    newBody.append('images', image)
                })
                const postImage = await axios.patch(`/posts/update-images`, newBody, { headers: { 'Content-Type': 'multipart/formdata' } })
                if (postImage.data.success) {
                    dispatch({ type: UPDATE_ONE_POST, payload: { isLoading: false, posted: true, data: data.data } })
                    setTimeout(() => {
                        dispatch({ type: UPDATE_ONE_POST, payload: { isLoading: false, posted: false, data: data.data } })
                    }, 1000)
                }
            } else {
                dispatch({ type: UPDATE_ONE_POST, payload: { isLoading: false, posted: true, data: data.data } })
                setTimeout(() => {
                    dispatch({ type: UPDATE_ONE_POST, payload: { isLoading: false, posted: false, data: data.data } })
                }, 1000)
            }
        }
    } catch (e) {
        dispatch({ type: UPDATE_ONE_POST, payload: { isLoading: false, data: {} } })
    }
}

export const deleteOnePost = (postId) => async (dispatch) => {
    dispatch({ type: DELETE_ONE_POST, payload: { isLoading: true, post_id: false } })
    try {
        const { data } = await axios.delete(`/posts/${postId}`);
        if (data.success) {
            dispatch({ type: DELETE_ONE_POST, payload: { isLoading: false, post_id: postId } })
        }
    } catch (e) {
        dispatch({ type: DELETE_ONE_POST, payload: { isLoading: false, post_id } })
    }
}