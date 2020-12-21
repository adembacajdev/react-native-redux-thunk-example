import React from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    OnHome, OffHome, OffFavourites, OnFavourites, OffMessages, OnMessages, OffProfile, OnProfile, OffSearch, OnSearch, AddIcon
} from '../assets/images';

//screens
import Home from '../screens/home/Home';
import Favourites from '../screens/favourites/Favourites';
import Search from '../screens/search/Search';
import Profile from '../screens/profile/Profile';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#D0808F', height: 50 }}
            labeled={true}
            activeColor="#ffffff"
        >
            <Tab.Screen
                name="ballina"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnHome />
                        :
                        <OffHome />
                }}
            />
            <Tab.Screen
                name="kërko"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnSearch />
                        :
                        <OffSearch />
                }}
            />
            <Tab.Screen
                name="shto"
                component={Search}
                options={{
                    tabBarIcon: () => <AddIcon />,
                }}
            />
            <Tab.Screen
                name="preferuar"
                component={Favourites}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <OnFavourites />
                        :
                        <OffFavourites />
                }}
            />
            <Tab.Screen
                name="profili"
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