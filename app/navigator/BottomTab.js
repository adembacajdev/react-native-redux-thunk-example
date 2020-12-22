import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    OnHome, OffHome, OffFavourites, OnFavourites, OffProfile, OnProfile, OffSearch, OnSearch, AddIcon
} from '../assets/images';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { IS_DRAWER_OPEN } from '../store/actionTypes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//screens
import Home from '../screens/home/Home';
import Category from '../screens/category/Category';
import Favourites from '../screens/favourites/Favourites';
import Search from '../screens/search/Search';
import Profile from '../screens/profile/Profile';
import Add from '../screens/add/Add';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStacks() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
    )
}

function BottomTabs() {
    const dispatch = useDispatch();
    const isDrawerOpen = useIsDrawerOpen();
    useEffect(() => {
        dispatch({ type: IS_DRAWER_OPEN, data: isDrawerOpen })
    }, [isDrawerOpen])
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#D0808F', height: 50 }}
            labeled={true}
            activeColor="#ffffff"
        >
            <Tab.Screen
                name="Home"
                component={HomeStacks}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnHome />
                        :
                        <OffHome />,
                    tabBarLabel: 'ballina'
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnSearch />
                        :
                        <OffSearch />,
                    tabBarLabel: 'kërko'
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarIcon: () => <AddIcon />,
                    tabBarLabel: "shto"
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnFavourites />
                        :
                        <OffFavourites />,
                    tabBarLabel: 'preferuar'
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnProfile />
                        :
                        <OffProfile />,
                    tabBarLabel: 'profili',
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;