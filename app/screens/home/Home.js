import React from 'react';
import { View, Text } from 'react-native';
import { MainHeader } from '../../components';
import styles from './style';

const Home = ({ navigation }) => {
    const _openDrawer = () => navigation.toggleDrawer();
    const _openMessages = () => navigation.navigate('Messages')
    return (
        <View style={styles.container}>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} />
            <Text>Home.js</Text>
        </View>
    )
}

export default Home