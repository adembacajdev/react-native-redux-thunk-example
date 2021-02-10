import {
    USERS_LOADING, GET_ALL_USERS, GET_ONE_USER, POST_ONE_USER, UPDATE_ONE_USER, DELETE_ONE_USER, GET_MY_PROFILE
} from '../actionTypes';

const _allUsersState = {
    isLoading: false,
    data: []
}

export function allUsers(state = _allUsersState, { type, payload }) {
    switch (type) {
        case USERS_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_USERS: return { isLoading: false, data: payload };
        default: return state;
    }
}

const _oneUserState = {
    isLoading: false,
    data: {}
}

export function oneUser(state = _oneUserState, { type, payload }) {
    switch (type) {
        case USERS_LOADING: return { ...state, isLoading: payload };
        case GET_ONE_USER: return { isLoading: false, data: { ...payload } };
        default: return state;
    }
}

const _myProfileState = {
    isLoading: false,
    data: {}
}

export function myProfile(state = _myProfileState, { type, payload }) {
    switch (type) {
        case USERS_LOADING: return { ...state, isLoading: payload };
        case GET_MY_PROFILE: return { isLoading: false, data: { ...payload } };
        default: return state;
    }
}

const _postUserState = {
    isLoading: false,
    data: {},
    posted: false
}

export function postingUser(state = _postUserState, { type, payload }) {
    switch (type) {
        case USERS_LOADING: return payload;
        case POST_ONE_USER: return payload;
        default: return state;
    }
}