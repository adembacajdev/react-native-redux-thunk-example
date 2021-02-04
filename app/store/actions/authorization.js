import { SET_IS_LOGGED_IN, SET_ACCOUNT_TYPE } from '../actionTypes';

export const setIsLoggedIn = (payload) => (dispatch) => {
    dispatch({ type: SET_IS_LOGGED_IN, payload });
    // if (payload?.email.includes('business')) {
    //     dispatch({ type: SET_ACCOUNT_TYPE, payload: 1 })
    // } else {
    //     dispatch({ type: SET_ACCOUNT_TYPE, payload: 0 })
    // }
}