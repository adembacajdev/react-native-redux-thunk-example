import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import DummyDressImage from '../../assets/images/dummyDressImage.png';
import { OffHeart, OnHeart } from '../../assets/images';
import { useSelector } from 'react-redux';
import { ComponentLoading } from '../index';

export const RentList = () => {
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

function Item({ _id, title, price, images, rent_price }) {
    const [isFavourite, toggleFavoruite] = useState(false);
    return (
        <View style={styles.card}>
            {(Array.isArray(images) && images.length > 0) && <Image source={{ uri: images[0].photo }} style={{ width: '100%', height: 160, borderRadius: 10 }} />}
            <View style={styles.bottomCard}>
                <View style={styles.leftBottomCard}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>${rent_price}</Text>
                </View>
                <View style={styles.rightBottomCard}>
                    <TouchableOpacity onPress={() => toggleFavoruite(!isFavourite)} style={styles.circle}>
                        {isFavourite ? <OnHeart /> : <OffHeart />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}