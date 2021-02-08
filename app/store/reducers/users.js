import {
    USERS_LOADING, GET_ALL_USERS, GET_ONE_USER, POST_ONE_USER, UPDATE_ONE_USER, DELETE_ONE_USER
} from '../actionTypes';

const _allUsersState = {
    isLoading: false,
    data: []
}

export function allUsers(state = _allUsersState, { type, payload }) {
    switch (type) {
        case USERS_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_USERS: return { isLoading: false, data: payload }
    }
}

const _oneUserState = {
    isLoading: false,
    data: {}
}

export function oneUser(state = _oneUserState, { type, payload }) {
    switch (type) {
        case USERS_LOADING: return { ...state, isLoading: payload };
        case GET_ONE_USER: return { isLoading: false, data: { ...payload } }
    }
}