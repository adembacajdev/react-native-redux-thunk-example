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
import { useEffect, useState } from 'react/cjs/react.development';
import { LOGIN } from './app/store/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getAllCategoryPosts } from './app/store/actions/category';
import { getAllSizes } from './app/store/actions/sizes';
import { getAllCities } from './app/store/actions/cities';

const App = ({ drawerStatus, currentRoute, getAllCategoryPosts, getAllSizes, getAllCities }) => {
  const [bottomColor, setBottomColor] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    checkAuth();
    //GET categories, sizes and cities
    getAllCategoryPosts();
    getAllSizes();
    getAllCities();
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

  useEffect(() => {
    if (drawerStatus) setBottomColor('white');
    else if (!drawerStatus && currentRoute === 'Messages') setBottomColor('white');
    else if (!drawerStatus && currentRoute === 'Login') {setBottomColor('#F2F2F2');}
    else setBottomColor('#D0808F');
  }, [currentRoute, drawerStatus])
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bottomColor }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  drawerStatus: state.drawerStatus,
  currentRoute: state.currentRoute
});
const mapDispatchToProps = { getAllCategoryPosts, getAllSizes, getAllCities };

export default connect(mapStateToProps, mapDispatchToProps)(App);