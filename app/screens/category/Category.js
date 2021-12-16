import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { MainHeader, CategoryGridList, CategoryList } from '../../components';
import { CategoryGridIcon, CategoryMenuIcon } from '../../assets/images';
import { useCallback, useEffect } from 'react/cjs/react.development';
import { categories as menu } from '../../constants';

const Category = ({ navigation, route }) => {
    const [listView, setListView] = useState(false);
    const _openDrawer = () => navigation.openDrawer();
    const _openMessages = () => navigation.navigate('Messages')
    const _toggleListView = useCallback(() => { setListView(!listView) }, [listView]);

    return (
        <>
            <MainHeader openMessages={_openMessages} openDrawer={_openDrawer} />
            <View style={styles.container}>
                {
                    listView
                        ?
                        <CategoryList
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
                        <CategoryGridList
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

export default Category;