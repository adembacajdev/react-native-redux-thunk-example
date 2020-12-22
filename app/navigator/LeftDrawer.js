import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTab';

//drawer
import { LeftDrawerComponent } from '../components';

const Drawer = createDrawerNavigator();

function LeftDrawer() {
    return (
        <Drawer.Navigator
            drawerPosition="left"
            drawerContent={LeftDrawerComponent}
            drawerType="slide"
            edgeWidth={50}
            hideStatusBar={true}
            statusBarAnimation="fade"
            keyboardDismissMode="on-drag"
            drawerStyle={{ width: '100%' }}
        >
            <Drawer.Screen name="Drawer" component={BottomTabs} />
        </Drawer.Navigator>
    );
}

export default LeftDrawer;