import React from 'react';
import {
    SLIDERS_LOADING, GET_ALL_SLIDERS, GET_ONE_SLIDER, POST_ONE_SLIDER, UPDATE_ONE_SLIDER, DELETE_ONE_SLIDER
} from '../actionTypes';
import { Zara } from '../../assets/images';

const _allSlidersState = {
    isLoading: false,
    data: [
        { id: 1, key: "1", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 2, key: "2", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 3, key: "3", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 4, key: "4", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
        { id: 5, key: "5", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.', icon: <Zara style={{ marginRight: 15 }} /> },
    ]
}

export function allSliders(state = _allSlidersState, { type, payload }) {
    switch (type) {
        case SLIDERS_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_SLIDERS: return { isLoading: false, data: payload }
        default: return state;
    }
}

const _oneSliderState = {
    isLoading: false,
    data: {
        id: 1,
        key: "1",
        title: 'Zara',
        description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.',
        icon: <Zara style={{ marginRight: 15 }} />
    }
}

export function oneSlider(state = _oneSliderState, { type, payload }) {
    switch (type) {
        case SLIDERS_LOADING: return { ...state, isLoading: payload };
        case GET_ONE_SLIDER: return { isLoading: false, data: { ...payload } }
        default: return state;
    }
}