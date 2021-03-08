import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import { OffHeart, OnHeart } from '../../assets/images';
import { useSelector } from 'react-redux';
import { Loading } from '../index';

export const CategoryList = ({ _headerComponent }) => {
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

function Item({ title, price, icon, liked }) {
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <View style={styles.card}>
            <View style={styles.left}>
                <Image source={icon} style={{ width: 70, height: 65, marginRight: 10 }} />
                <View style={styles.texts}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.circle}>
                    {isFavourite ? <OnHeart style={{width: 15, height: 15}} /> : <OffHeart style={{width: 15, height: 15}} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}