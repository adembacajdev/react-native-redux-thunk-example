import { IS_DRAWER_OPEN } from '../actionTypes';

export const setDrawerStatus = (data) => (dispatch) => {
    dispatch({ type: IS_DRAWER_OPEN, data })
}