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
import ShopDetails from '../screens/profile/ShopDetails';
import ShopAddress from '../screens/profile/ShopAddress';
import MyComments from '../screens/profile/MyComments';
import MyProducts from '../screens/profile/MyProducts';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import EditProduct from '../screens/profile/EditProduct';
import Item from '../screens/item/Item';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    const { isLoading, status } = useSelector(state => state.isLoggedIn)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LeftDrawer" component={LeftDrawer} />
                <Stack.Screen name="Messages" component={Messages} />
                <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
                <Stack.Screen name="MyComments" component={MyComments} />
                <Stack.Screen name="MyProducts" component={MyProducts} />
                <Stack.Screen name="EditProduct" component={EditProduct} />
                <Stack.Screen name="ShopDetails" component={ShopDetails} />
                <Stack.Screen name="ShopAddress" component={ShopAddress} />
                <Stack.Screen name="Item" component={Item} />
                {!status && <Stack.Screen name="Login" component={Login} />}
                {!status && <Stack.Screen name="Signup" component={Signup} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;