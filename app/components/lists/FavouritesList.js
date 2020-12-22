import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import DummyDressImage from '../../assets/images/dummyDressImage.png';
import { OffHeart, OnHeart } from '../../assets/images';

export const FavouritesList = ({ _headerComponent }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={_headerComponent}
                data={[0, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={({ item }) => (
                    <Item {...item} />
                )}
                keyExtractor={(item, index) => String(item)}
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
        color: '#625261'
    },
    texts: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    }
})

function Item() {
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <View style={styles.card}>
            <View style={styles.left}>
                <Image source={DummyDressImage} style={{ width: 70, height: 65, marginRight: 10 }} />
                <View style={styles.texts}>
                    <Text style={styles.title}>Short Wedding Dress</Text>
                    <Text style={styles.price}>$149.99</Text>
                </View>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.circle}>
                    {isFavourite ? <OnHeart /> : <OffHeart />}
                </TouchableOpacity>
            </View>
        </View>
    )
}