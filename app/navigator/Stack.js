import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useSelector } from 'react-redux';

//
import LeftDrawer from './LeftDrawer';
import Messages from '../screens/messages/Messages';
import PersonalDetails from '../screens/profile/PersonalDetails';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    const { isLoading, status } = useSelector(state => state.isLoggedIn)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LeftDrawer" component={LeftDrawer} />
                <Stack.Screen name="Messages" component={Messages} />
                <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
                {!status && <Stack.Screen name="Login" component={Login} />}
                {!status && <Stack.Screen name="Signup" component={Signup} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;