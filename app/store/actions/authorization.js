import { SET_IS_LOGGED_IN, SET_ACCOUNT_TYPE, LOGIN, LOGOUT } from '../actionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (body) => async (dispatch) => {
    dispatch({ type: LOGIN, payload: { isLoading: true, status: false } })
    try {
        const { data } = await axios.post(`/auth/login`, body);
        console.log('data', data)
        if (data.success) {
            let user_type = JSON.stringify(data?.data?.user_type);
            dispatch({ type: LOGIN, payload: { isLoading: false, status: true } })
            AsyncStorage.setItem('token', data?.data?.token);
            AsyncStorage.setItem('user_id', data?.data?.user_id);
            AsyncStorage.setItem('user_type', user_type);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.token}`;
        } else {
            dispatch({ type: LOGIN, payload: { isLoading: false, status: false } })
        }
    } catch (e) {
        dispatch({ type: LOGIN, payload: { isLoading: false, status: false } })
    }
}

export const logout = () => (dispatch) => {
    AsyncStorage.clear();
    dispatch({ type: LOGOUT })
}