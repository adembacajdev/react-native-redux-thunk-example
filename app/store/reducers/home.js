import React from 'react';
import { ALL_SLIDERS, ALL_SLIDERS_LOADING, LAST_POSTS, LAST_POSTS_LOADING, DISCOUNT_POSTS, DISCOUNT_POSTS_LOADING } from '../actionTypes';
import { Zara } from '../../assets/images';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _slidersState = {
    isLoading: false,
    data: [
        { id: 1, key: "1", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 2, key: "2", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 3, key: "3", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 4, key: "4", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 5, key: "5", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
    ]
}

export function allSliders(state = _slidersState, { type, payload }) {
    switch (type) {
        case ALL_SLIDERS:
            return {
                isLoading: false,
                data: payload
            };
        case ALL_SLIDERS_LOADING:
            return { ...state, isLoading: payload }
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
        case LAST_POSTS:
            console.log('lastPosts', payload)
            return {
                isLoading: false,
                data: payload
            };
        case LAST_POSTS_LOADING:
            return { ...state, isLoading: payload }
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
        case DISCOUNT_POSTS:
            console.log('lastPosts', payload)
            return {
                isLoading: false,
                data: payload
            };
        case DISCOUNT_POSTS_LOADING:
            return { ...state, isLoading: payload }
        default: return state;
    }
}