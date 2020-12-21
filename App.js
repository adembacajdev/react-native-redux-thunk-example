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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#D0808F' }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
};

export default App;