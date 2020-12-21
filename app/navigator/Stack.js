import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//
import LeftDrawer from './LeftDrawer';
import Messages from '../screens/messages/Messages';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LeftDrawer" component={LeftDrawer} />
                <Stack.Screen name="Messages" component={Messages} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;