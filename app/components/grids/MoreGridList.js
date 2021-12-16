import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import { OffHeart, OnHeart } from '../../assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../index';
import { useNavigation } from '@react-navigation/native';
import useFavourite from '../../hooks/useFavourite';
import Storage from '../../services/Storage';
import { deleteOneFavourites, postOneFavourite } from '../../store/actions/favourites';

export const MoreGridList = ({ _headerComponent }) => {
    const { data, isLoading } = useSelector(state => state.allPostsByCategory);
    return (
        isLoading
            ?
            <Loading />
            :
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={_headerComponent}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={data}
                    renderItem={({ item }) => (
                        <Item {...item} />
                    )}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item, index) => String(index)}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlist: {
        padding: 15
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
    },
    price_from: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: '#625261',
        textDecorationLine: "line-through"
    },
    price_to: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: '#625261',
        fontWeight: 'bold',
        marginLeft: 10
    },
    row_discount: {
        flexDirection: 'row'
    }
})

function Item({ _id, title, images, discount, discount_from, discount_to, price }) {
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
                    {
                        !discount
                            ?
                            <Text style={styles.price}>${price}</Text>
                            :
                            <View style={styles.row_discount}>
                                <Text style={styles.price_from}>${discount_from}</Text>
                                <Text style={styles.price_to}>${discount_to}</Text>
                            </View>
                    }
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