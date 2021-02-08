import {
    GET_ALL_CATEGORY_POSTS, GET_ONE_CATEGORY, UPDATE_ONE_CATEGORY, POST_ONE_CATEGORY, DELETE_ONE_CATEGORY, CATEGORIES_LOADING
} from '../actionTypes';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _categoryPostsState = {
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
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
        {
            title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
        },
    ]
}

export function allCategories(state = _categoryPostsState, { type, payload }) {
    switch (type) {
        case CATEGORIES_LOADING: return { ...state, isLoading: payload }
        case GET_ALL_CATEGORY_POSTS: return { data: payload, isLoading: false };
        default: return state;
    }
}

const _oneCategoryState = {
    isLoading: false,
    data: {}
}

export function oneCategory(state = _oneCategoryState, { type, payload }) {
    switch (type) {
        case CATEGORIES_LOADING: return { ...state, isLoading: payload }
        case GET_ALL_CATEGORY_POSTS: return { data: { ...payload }, isLoading: false };
        default: return state;
    }
}