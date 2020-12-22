import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import DummyDressImage from '../../assets/images/dummyDressImage.png';
import { OffHeart, OnHeart } from '../../assets/images';

export const CategoryGridList = ({ _headerComponent }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={_headerComponent}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={[0, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={({ item }) => (
                    <Item {...item} />
                )}
                horizontal={false}
                numColumns={2}
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
        width: 183,
        height: 223.5,
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3,
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

function Item() {
    const [isFavourite, toggleFavoruite] = useState(false);
    return (
        <View style={styles.card}>
            <Image source={DummyDressImage} style={{ width: '100%' }} />
            <View style={styles.bottomCard}>
                <View style={styles.leftBottomCard}>
                    <Text style={styles.title}>Short Wedding Dress</Text>
                    <Text style={styles.price}>$149.99</Text>
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