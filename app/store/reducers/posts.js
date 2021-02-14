import React from 'react';
import {
    POSTS_LOADING, GET_ALL_POSTS, GET_ONE_POST, GET_DISCOUNT_POSTS, GET_LAST_POSTS, GET_RENT_POSTS, UPDATE_ONE_POST,
    POST_ONE_POST, DELETE_ONE_POST, GET_ALL_MY_POSTS, GET_ALL_POSTS_BY_CATEGORY
} from '../actionTypes';
import { Zara } from '../../assets/images';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _allPostsState = {
    isLoading: false,
    data: []
}

export function allPosts(state = _allPostsState, { type, payload }) {
    switch (type) {
        case GET_ALL_POSTS: return payload;
        default: return state;
    }
}

const _allPostsByCategoryState = {
    isLoading: false,
    data: [
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        }
    ]
}

export function allPostsByCategory(state = _allPostsByCategoryState, { type, payload }) {
    switch (type) {
        case GET_ALL_POSTS_BY_CATEGORY: return payload;
        default: return state;
    }
}

const _allMyPostsState = {
    isLoading: false,
    data: []
}

export function allMyPosts(state = _allMyPostsState, { type, payload }) {
    switch (type) {
        case GET_ALL_MY_POSTS: return payload;
        case DELETE_ONE_POST:
            if (payload?.post_id) {
                let deleteProduct = state.data.filter(post => post?._id !== payload?.post_id);
                return { isLoading: false, data: deleteProduct };
            } else {
                return { isLoading: payload.isLoading, data: state.data }
            }
        default: return state;
    }
}

const _discountPostsState = {
    isLoading: false,
    data: [
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        }
    ]
}

export function discountPosts(state = _discountPostsState, { type, payload }) {
    switch (type) {
        case GET_DISCOUNT_POSTS: return payload;
        default: return state;
    }
}

const _lastPostsState = {
    isLoading: false,
    data: [
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        }
    ]
}

export function lastPosts(state = _lastPostsState, { type, payload }) {
    switch (type) {
        case GET_LAST_POSTS: return payload;
        default: return state;
    }
}

const _rentPostsState = {
    isLoading: false,
    data: []
}

export function rentPosts(state = _rentPostsState, { type, payload }) {
    switch (type) {
        case GET_RENT_POSTS: return payload;
        default: return state;
    }
}

const _onePostState = {
    isLoading: false,
    data: {}
}

export function onePost(state = _onePostState, { type, payload }) {
    switch (type) {
        case GET_ONE_POST: return payload;
        default: return state;
    }
}

const _postingPostState = {
    isLoading: false,
    posted: false
}

export function postingPost(state = _postingPostState, { type, payload }) {
    switch (type) {
        case POST_ONE_POST: return payload;
        case POSTS_LOADING: return payload;
        default: return state;
    }
}