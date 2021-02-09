import axios from 'axios';
import { LOGIN, LOGOUT } from '../store/actionTypes';
import store from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = {
    login: async (body) => {
        store.dispatch({ type: LOGIN, payload: { isLoading: true, status: false } })
        try {
            const { data } = await axios.post(`/auth/login`, body);
            if (data.success) {
                store.dispatch({ type: LOGIN, payload: { isLoading: false, status: true } })
            } else {
                store.dispatch({ type: LOGIN, payload: { isLoading: false, status: false } })
            }
        } catch (e) {
            store.dispatch({ type: LOGIN, payload: { isLoading: false, status: false } })
        }
    },
    logout: () => {
        AsyncStorage.clear();
        store.dispatch({ type: LOGOUT });
        return true;
    }
}

export default Auth;