import { IS_DRAWER_OPEN, SET_CURRENT_ROUTE } from '../actionTypes';

export const setDrawerStatus = (data) => (dispatch) => {
    dispatch({ type: IS_DRAWER_OPEN, data })
}

export const setCurrentRoute = (data) => (dispatch) => {
    dispatch({ type: SET_CURRENT_ROUTE, data })
}