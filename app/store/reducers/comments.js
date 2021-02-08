import {
    COMMENTS_LOADING, GET_ALL_COMMENTS, GET_ONE_COMMENTS, POST_ONE_COMMENTS, UPDATE_ONE_COMMENTS, DELETE_ONE_COMMENTS
} from '../actionTypes';

const _allCommentsState = {
    isLoading: false,
    data: []
}

export function allComments(state = _allCommentsState, { type, payload }) {
    switch (type) {
        case COMMENTS_LOADING: return { ...state, isLoading: payload };
        case GET_ALL_COMMENTS: return { isLoading: false, data: payload };
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