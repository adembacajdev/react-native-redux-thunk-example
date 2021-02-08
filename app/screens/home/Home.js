import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MainHeader, HomeSlider, HomeCardSlider, LastPosts, Discounts } from '../../components';
import styles from './style';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getAllSliders} from '../../store/actions/sliders';

const Home = (props) => {
    const { navigation, allSliders, getAllSliders } = props;
    const [category, setCategory] = useState('none');

    // useFocusEffect(useCallback(() => {
    //     getAllSliders();
    //     getLastPosts();
    //     getDiscountPosts();
    // }, []))

    const _openDrawer = () => navigation.toggleDrawer();
    const _openMessages = () => navigation.navigate('Messages');
    return (
        <>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} />
            <ScrollView contentContainerStyle={styles.container}>
                {allSliders.length > 0 && <HomeSlider />}
                <HomeCardSlider category={category} setCategory={setCategory} />
                <Text style={styles.sectionTitle}>Të fundit</Text>
                <LastPosts />
                <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Në zbritje</Text>
                <Discounts />
            </ScrollView>
        </>
    )
}

const mapStateToProps = (state) => ({
    allSliders: state.allSliders,
    lastPosts: state.lastPosts,
    discountPosts: state.discountPosts
})

const mapDispatchToProps = { getAllSliders }

export default connect(mapStateToProps, mapDispatchToProps)(Home)