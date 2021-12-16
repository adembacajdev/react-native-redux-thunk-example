import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { MainHeader, MoreList, MoreGridList } from '../../components';
import { CategoryGridIcon, CategoryMenuIcon } from '../../assets/images';
import { categories as menu } from '../../constants';
import { useDispatch } from 'react-redux';
import { getAllPostsByCategory } from '../../store/actions/posts';

const More = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const [listView, setListView] = useState(false);

    const _openDrawer = () => navigation.openDrawer();
    const _openMessages = () => navigation.navigate('Messages')
    const _toggleListView = useCallback(() => { setListView(!listView) }, [listView]);

    useEffect(() => {
        dispatch(getAllPostsByCategory(route?.params?.categoryId))
    }, [route?.params?.categoryId]);

    return (
        <>
            <MainHeader openMessages={_openMessages} openDrawer={_openDrawer} />
            <View style={styles.container}>
                {
                    listView
                        ?
                        <MoreList
                            _headerComponent={() => (
                                <View style={styles.topRow}>
                                    <View style={styles.topLeftRow}>
                                        {menu.filter(item => item.title === route?.params?.title)[0].icon}
                                        <Text style={styles.rowTitle}>{route?.params?.title}</Text>
                                    </View>
                                    <View style={styles.topRightRow}>
                                        <TouchableOpacity onPress={_toggleListView}>
                                            {listView ? <CategoryGridIcon /> : <CategoryMenuIcon />}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        :
                        <MoreGridList
                            _headerComponent={() => (
                                <View style={styles.topRow}>
                                    <View style={styles.topLeftRow}>
                                        {menu.filter(item => item.title === route?.params?.title)[0].icon}
                                        <Text style={styles.rowTitle}>{route?.params?.title}</Text>
                                    </View>
                                    <View style={styles.topRightRow}>
                                        <TouchableOpacity onPress={_toggleListView}>
                                            {listView ? <CategoryGridIcon /> : <CategoryMenuIcon />}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                }
            </View>
        </>
    )
}

export default More;