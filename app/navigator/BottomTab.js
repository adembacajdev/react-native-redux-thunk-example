import React from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    OnHome, OffHome, OffFavourites, OnFavourites, OffMessages, OnMessages, OffProfile, OnProfile
} from '../assets/images';

//screens
import Home from '../screens/home/Home';
import Favourites from '../screens/favourites/Favourites';
import Messages from '../screens/messages/Messages';
import Profile from '../screens/profile/Profile';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#A3406C', height: 50 }}
            labeled={true}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnHome />
                        :
                        <OffHome />
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnFavourites />
                        :
                        <OffFavourites />
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnMessages />
                        :
                        <OffMessages />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnProfile />
                        :
                        <OffProfile />
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;