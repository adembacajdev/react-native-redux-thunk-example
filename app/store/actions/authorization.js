import { SET_IS_LOGGED_IN } from '../actionTypes';

export const setIsLoggedIn = (data) => (dispatch) => {
    dispatch({ type: SET_IS_LOGGED_IN, data })
}