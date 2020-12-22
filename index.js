/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from './app/store';

enableScreens();

function MainApp() {
    return (
        <>
            <Provider store={store}>
                <App />
            </Provider>
        </>
    )
}

AppRegistry.registerComponent(appName, () => MainApp);
