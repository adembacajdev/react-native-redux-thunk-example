import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import { OffHeart, OnHeart } from '../../assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../index';
import { useNavigation } from '@react-navigation/native';
import { postOneFavourite, deleteOneFavourites } from '../../store/actions/favourites';
import Storage from '../../services/Storage';
import useFavourite from '../../hooks/useFavourite';

export const MoreList = ({ _headerComponent, category }) => {
    const [flatlist, refreshFlatlist] = useState(false);

    const { data: allPosts, isLoading: allLoading } = useSelector(state => state.allPosts);
    const { data: lastPosts, isLoading: lastLoading } = useSelector(state => state.lastPosts);
    const { data: discountPosts, isLoading: discountLoading } = useSelector(state => state.discountPosts);
    const { data: rentPosts, isLoading: rentLoading } = useSelector(state => state.rentPosts);

    const _getDataByCategory = () => {
        switch (category) {
            case "latest": return lastPosts;
            case "discount": return discountPosts;
            case "allPosts": return allPosts;
            case "listOfStores": return [];
            case "rent": return rentPosts;
            default: return allPosts;
        }
    }

    const _getLoadingState = () => {
        switch (category) {
            case "latest": return lastLoading;
            case "discount": return discountLoading;
            case "allPosts": return allLoading;
            case "listOfStores": return false
            case "rent": return rentLoading;
            default: return allLoading;
        }
    }
    
    useEffect(() => {
        refreshFlatlist(!flatlist);
    }, [allPosts, lastPosts, discountPosts, rentPosts]);

    return (
        _getLoadingState()
            ?
            <Loading />
            :
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={_headerComponent}
                    data={_getDataByCategory()}
                    extraData={flatlist}
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

function Item({ _id, title, discount, discount_from, discount_to, images, price }) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
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
            <View style={styles.left}>
                {(Array.isArray(images) && images.length > 0) && <Image source={{ uri: images[0]?.photo }} style={{ width: 70, height: 65, marginRight: 10, borderRadius: 3 }} />}
                <View style={styles.texts}>
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
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={_onFavouriteClick} style={styles.circle}>
                    {isFavourite ? <OnHeart style={{ width: 15, height: 15 }} /> : <OffHeart style={{ width: 15, height: 15 }} />}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}