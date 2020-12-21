import React from 'react';
import { View, Text } from 'react-native';
import { MainHeader } from '../../components';

const Home = () => {
    return (
        <View style={{flex: 1}}>
            <MainHeader />
            <Text>Home.js</Text>
        </View>
    )
}

export default Home