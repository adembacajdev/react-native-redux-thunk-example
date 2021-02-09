import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
    getToken: async () => {
        const token = await AsyncStorage.getItem('token');
        return token ?? false;
    },
    getUserType: async () => {
        const userType = await AsyncStorage.getItem('user_type');
        return userType ?? false;
    },
    getUserId: async () => {
        const userId = await AsyncStorage.getItem('user_id');
        return userId ?? false;
    }
}

export default Storage;