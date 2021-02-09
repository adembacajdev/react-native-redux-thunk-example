import {
    COMMENTS_LOADING, GET_ALL_COMMENTS_PER_POST, GET_ALL_COMMENTS_PER_USER, GET_ONE_COMMENTS, POST_ONE_COMMENTS, UPDATE_ONE_COMMENTS, DELETE_ONE_COMMENTS
} from '../actionTypes';

const _allPostCommentsState = {
    isLoading: false,
    data: []
}

export function allPostComments(state = _allPostCommentsState, { type, payload }) {
    switch (type) {
        case COMMENTS_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_COMMENTS_PER_POST: return { isLoading: false, data: payload };
        default: return state;
    }
}

const _allUserCommentsState = {
    isLoading: false,
    data: []
}

export function allUserComments(state = _allUserCommentsState, { type, payload }) {
    switch (type) {
        case COMMENTS_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_COMMENTS_PER_USER: return { isLoading: false, data: payload };
        default: return state;
    }
}

const _oneCommentState = {
    isLoading: false,
    data: {}
}

export function oneComment(state = _oneCommentState, { type, payload }) {
    switch (type) {
        case COMMENTS_LOADING: return { ...state, isLoading: payload };
        case GET_ONE_COMMENTS: return { isLoading: false, data: { ...payload } };
        default: return state;
    }
}