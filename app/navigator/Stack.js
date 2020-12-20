import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//
import LeftDrawer from './LeftDrawer';


const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="LeftDrawer" component={LeftDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;