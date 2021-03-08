import { GET_ALL_SHOPS } from '../actionTypes';
import axios from 'axios';

export const getAllShops = () => async (dispatch) => {
    dispatch({ type: GET_ALL_SHOPS, payload: { isLoading: true, data: [] } })
    try {
        const { data } = await axios.get('/users/get-shops');
        if (data.success) {
            dispatch({ type: GET_ALL_SHOPS, payload: { isLoading: false, data: data.data } })
        }
    } catch (e) {
        dispatch({ type: GET_ALL_SHOPS, payload: { isLoading: false, data: [] } })
    }
}