import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { MainHeader, MoreList, MoreGridList, BackHeader } from '../../components';
import { CategoryGridIcon, CategoryMenuIcon, OffAll, OffDiscount, OffDyqanet, OffNew, OffRent } from '../../assets/images';
import { categories as menu } from '../../constants';
import { useDispatch } from 'react-redux';
import { getAllPosts, getDiscountPosts, getLastPosts, getRentPosts } from '../../store/actions/posts';

const More = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const [listView, setListView] = useState(false);
    const _toggleListView = useCallback(() => { setListView(!listView) }, [listView]);
    const _goBack = () => navigation.goBack();

    useEffect(() => {
        switch (route?.params?.categoryId) {
            case "latest":
                dispatch(getLastPosts());
                break;
            case "discount":
                dispatch(getDiscountPosts());
                break;
            case "allPosts":
                dispatch(getAllPosts());
                break;
            case "listOfStores": break;
            case "rent":
                dispatch(getRentPosts());
                break;
            default:
                dispatch(getAllPosts());
                break;
        }
    }, [route?.params?.categoryId]);

    const _renderImage = () => {
        switch (route?.params?.categoryId) {
            case "latest": return <OffNew />;
            case "discount": return <OffDiscount />;
            case "allPosts": return <OffAll />;
            case "listOfStores": return <OffDyqanet />;
            case "rent": return <OffRent />;
            default: return <OffAll />;
        }
    }

    return (
        <>
            <BackHeader title={route?.params?.title} goBack={_goBack} />
            <View style={styles.container}>
                {
                    listView
                        ?
                        <MoreList
                            category={route?.params?.categoryId}
                            _headerComponent={() => (
                                <View style={styles.topRow}>
                                    <View style={styles.topLeftRow}>
                                        {_renderImage()}
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
                            category={route?.params?.categoryId}
                            _headerComponent={() => (
                                <View style={styles.topRow}>
                                    <View style={styles.topLeftRow}>
                                        {_renderImage()}
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