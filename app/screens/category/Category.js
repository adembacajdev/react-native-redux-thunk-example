import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { MainHeader } from '../../components';
import { CategoryGridIcon, CategoryMenuIcon } from '../../assets/images';
import { useCallback } from 'react/cjs/react.development';

const Category = ({ navigation, route }) => {
    const [listView, setListView] = useState(false);
    const _toggleListView = useCallback(() => { setListView(!listView) }, [listView]);
    
    return (
        <>
            <MainHeader />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.topLeftRow}>
                        <Text style={styles.rowTitle}>{route?.params?.title}</Text>
                    </View>
                    <View style={styles.topRightRow}>
                        <TouchableOpacity onPress={_toggleListView}>
                            {listView ? <CategoryGridIcon /> : <CategoryMenuIcon />}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Category;