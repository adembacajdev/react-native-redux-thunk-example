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
import axios from 'axios';
import { BASE_URL } from './app/common/config';

axios.defaults.baseURL = BASE_URL;

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
