import React from 'react';
import { View, Text } from 'react-native';
import { MainHeader, HomeSlider } from '../../components';
import styles from './style';

const Home = ({ navigation }) => {
    const _openDrawer = () => navigation.toggleDrawer();
    const _openMessages = () => navigation.navigate('Messages')
    return (
        <>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} />
            <View style={styles.container}>
                <HomeSlider />
            </View>
        </>
    )
}

export default Home