import React from 'react';
import { ALL_SLIDERS, LAST_POSTS, DISCOUNT_POSTS } from '../actionTypes';
import { Zara } from '../../assets/images';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _slidersState = [
    { id: 1, key: "1", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
    { id: 2, key: "2", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
    { id: 3, key: "3", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
    { id: 4, key: "4", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
    { id: 5, key: "5", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
]

export function allSliders(state = _slidersState, { type, payload }) {
    switch (type) {
        case ALL_SLIDERS: return payload;
        default: return state;
    }
}

const _lastPostsState = [
    {
        title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
    },
    {
        title: 'Short Wedding Dress', price: '149.99', liked: false, icon: DummyDressImage,
    }
]

export function lastPosts(state = _lastPostsState, { type, payload }) {
    switch (type) {
        case LAST_POSTS: return payload;
        default: return state;
    }
}

const _discountPostsState = [
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

export function discountPosts(state = _discountPostsState, { type, payload }) {
    switch (type) {
        case DISCOUNT_POSTS: return payload;
        default: return state;
    }
}