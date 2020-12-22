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
import { connect } from 'react-redux';

const App = ({ drawerStatus }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: drawerStatus ? 'white' : '#D0808F' }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = ({ drawerStatus }) => ({ drawerStatus });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);