import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import DummyDressImage from '../../assets/images/dummyDressImage.png';
import { OffHeart, OnHeart } from '../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { ComponentLoading } from '../index';
import { useNavigation } from '@react-navigation/native';
import useFavourite from '../../hooks/useFavourite';
import Storage from '../../services/Storage';
import { deleteOneFavourites, postOneFavourite } from '../../store/actions/favourites';

export const LastPosts = () => {
    const { data, isLoading } = useSelector(state => state.lastPosts);
    return (
        isLoading
            ?
            <ComponentLoading width={"100%"} height={253.5} />
            :
            <View style={styles.container}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{ paddingVertical: 10 }}
                    data={data}
                    renderItem={({ item }) => (
                        <Item {...item} />
                    )}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item, index) => String(item._id)}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    card: {
        width: 183,
        height: 223.5,
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 1,
        zIndex: 999999,
        marginBottom: 20
    },
    bottomCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    leftBottomCard: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rightBottomCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#F98B9C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        fontFamily: fonts.BOLD,
        color: '#625261'
    },
    price: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: '#625261'
    }
})

function Item({ _id, title, images, description, price }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { isFavourite } = useFavourite(_id);

    //Functions
    const _openItem = () => navigation.navigate('Item', { post_id: _id });

    const _onFavouriteClick = async () => {
        const user_id = await Storage.getUserId();
        if (user_id) {
            if (!isFavourite) {
                dispatch(postOneFavourite({ user_id, post_id: _id }));
            } else {
                dispatch(deleteOneFavourites(_id));
            }
        } else {
            navigation.navigate('Login')
        }
    }
    return (
        <TouchableOpacity onPress={_openItem} activeOpacity={0.8} style={styles.card}>
            {(Array.isArray(images) && images.length > 0) && <Image source={{ uri: images[0]?.photo }} style={{ width: '100%', height: 160, borderRadius: 10 }} />}
            <View style={styles.bottomCard}>
                <View style={styles.leftBottomCard}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
                <View style={styles.rightBottomCard}>
                    <TouchableOpacity onPress={_onFavouriteClick} style={styles.circle}>
                        {isFavourite ? <OnHeart style={{ width: 15, height: 15 }} /> : <OffHeart style={{ width: 15, height: 15 }} />}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}