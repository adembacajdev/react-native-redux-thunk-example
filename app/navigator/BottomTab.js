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
import Add from '../screens/add/Add';

const Tab = createMaterialBottomTabNavigator();

const NullComponent = () => null;

function BottomTabs() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#D0808F', height: 50 }}
            labeled={true}
            activeColor="#ffffff"
        >
            <Tab.Screen
                name="Home"
                component={Home}
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
                        tabBarLabel: 'profili'
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;