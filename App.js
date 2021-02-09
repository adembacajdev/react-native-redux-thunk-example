/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './app/navigator/Stack';
import { connect, useDispatch } from 'react-redux';
import Storage from './app/services/Storage';
import { useEffect } from 'react/cjs/react.development';
import { LOGIN } from './app/store/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const App = ({ drawerStatus, currentRoute }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const token = await Storage.getToken();
    if (token) {
      dispatch({ type: LOGIN, payload: { isLoading: false, status: true } });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      dispatch({ type: LOGIN, payload: { isLoading: false, status: false } });
      AsyncStorage.clear()
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: drawerStatus ? 'white' : currentRoute === 'Messages' ? 'white' : '#D0808F' }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = ({ drawerStatus, currentRoute }) => ({ drawerStatus, currentRoute });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);