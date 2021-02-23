import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import DummyDressImage from '../../assets/images/dummyDressImage.png';
import { OffHeart, OnHeart, ItemRightArrow } from '../../assets/images';
import { useSelector } from 'react-redux';
import { ComponentLoading } from '../index';
import { RightArrow } from '../../assets/images/ShopsList';

export const ShopsList = () => {
    const { data, isLoading } = useSelector(state => state.allShops);
    return (
        isLoading
            ?
            <ComponentLoading width="100%" height={105} />
            :
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
                    data={data}
                    renderItem={({ item }) => (
                        <Item {...item} />
                    )}
                    keyExtractor={(item, index) => String(index)}
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
        width: '100%',
        height: 75,
        borderRadius: 10,
        padding: 5,
        paddingRight: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 1,
        zIndex: 999999,
        marginBottom: 20
    },
    left: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
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
        color: '#625261',
        width: '70%'
    },
    texts: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    }
})

function Item({ _id, shop_name, shop_description, user_type, name, surname, city, email, phone_number, profile_picture }) {
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <View style={styles.card}>
            <View style={styles.left}>
                <Image source={{ uri: profile_picture }} style={{ width: 70, height: 65, marginRight: 10, borderRadius: 10 }} />
                <View style={styles.texts}>
                    <Text style={styles.title}>{shop_name}</Text>
                    <Text style={styles.price}>{shop_description}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.circle}>
                    <RightArrow />
                </TouchableOpacity>
            </View>
        </View>
    )
}