import { SEARCH_POSTS } from '../actionTypes';
import DummyDressImage from '../../assets/images/dummyDressImage.png';

const _searchPostsState = {
    loading: false,
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

export function searchPosts(state = _searchPostsState, { type, payload }) {
    switch (type) {
        case SEARCH_POSTS: return payload;
        default: return state;
    }
}