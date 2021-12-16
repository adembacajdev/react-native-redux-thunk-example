import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {
    MainHeader,
    HomeSlider,
    HomeCardSlider,
    LastPosts,
    Discounts,
    ShopsList,
    RentList,
    AllPostsList
} from '../../components';
import styles from './style';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getAllSliders } from '../../store/actions/sliders';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { getAllShops } from '../../store/actions/shops';
import { getAllPosts, getLastPosts, getRentPosts, getDiscountPosts } from '../../store/actions/posts';

const Home = (props) => {
    const { navigation } = props;
    const [category, setCategory] = useState('none');

    useFocusEffect(useCallback(() => {
        props.setCurrentRoute('')
        props.getAllShops();
        props.getAllPosts();
        props.getRentPosts();
        // getAllSliders();
        props.getLastPosts();
        props.getDiscountPosts();
    }, []))

    useEffect(() => {
        props.setCurrentRoute('')
    }, [props.isLoggedIn])

    const _openDrawer = () => navigation.toggleDrawer();
    const _openMessages = () => navigation.navigate('Messages');
    return (
        <>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} />
            <ScrollView contentContainerStyle={styles.container}>
                <HomeSlider />
                <HomeCardSlider category={category} setCategory={setCategory} />
                {category === 'none' && <>
                    <View style={styles.textsRow}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Të fundit</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {<LastPosts />}
                    <View style={[styles.textsRow, { marginTop: 10 }]}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Në zbritje</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Discounts />
                </>}
                {category === 'tegjitha' && <>
                    <View style={styles.textsRow}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Të gjitha</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <AllPostsList />
                </>}
                {category === 'dyqanet' && <>
                    <View style={styles.textsRow}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Lista e dyqaneve</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ShopsList />
                </>}
                {category === 'new' && <>
                    <View style={styles.textsRow}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Të fundit</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <LastPosts />
                </>}
                {category === 'rent' && <>
                    <View style={styles.textsRow}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Me qera</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <RentList />
                </>}
                {category === 'discount' && <>
                    <View style={styles.textsRow}>
                        <View style={styles.leftText}>
                            <Text style={styles.sectionTitle}>Në zbritje</Text>
                        </View>
                        <View style={styles.rightText}>
                            <TouchableOpacity>
                                <Text style={styles.link}>Më shumë</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Discounts />
                </>}
            </ScrollView>
        </>
    )
}

const mapStateToProps = (state) => ({
    allSliders: state.allSliders,
    lastPosts: state.lastPosts,
    discountPosts: state.discountPosts,
    isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = {
    getAllSliders, setCurrentRoute, getAllShops, getAllPosts, getLastPosts, getRentPosts, getDiscountPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)