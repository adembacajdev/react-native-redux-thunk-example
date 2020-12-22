import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MainHeader, HomeSlider, HomeCardSlider, LastPosts, Discounts } from '../../components';
import styles from './style';

const Home = ({ navigation }) => {
    const [category, setCategory] = useState('none');

    const _openDrawer = () => navigation.toggleDrawer();
    const _openMessages = () => navigation.navigate('Messages')
    return (
        <>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} />
            <ScrollView contentContainerStyle={styles.container}>
                <HomeSlider />
                <HomeCardSlider category={category} setCategory={setCategory} />
                <Text style={styles.sectionTitle}>Të fundit</Text>
                <LastPosts />
                <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Në zbritje</Text>
                <Discounts />
            </ScrollView>
        </>
    )
}

export default Home