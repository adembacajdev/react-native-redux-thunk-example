import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { MainHeader, FavouritesList } from '../../components';
import { connect } from 'react-redux';
import { getAllFavourites } from '../../store/actions/favourites';
import { useFocusEffect } from '@react-navigation/native';
import Storage from '../../services/Storage';

const Favourites = (props) => {
    useFocusEffect(useCallback(() => {
        getAllFavouritesAsync();
    }, []))

    async function getAllFavouritesAsync() {
        const userId = await Storage.getUserId();
        if (userId) {
            props.getAllFavourites(userId)
        }
    }
    return (
        <>
            <MainHeader />
            <View style={styles.container}>
                <FavouritesList
                    _headerComponent={() => (
                        <View style={styles.topTitle}>
                            <Text style={styles.titleText}>Preferuar</Text>
                        </View>
                    )}
                />
            </View>
        </>
    )
}

const mapStateToProps = (state) => ({
    allFavourites: state.allFavourites
})

const mapDispatchToProps = { getAllFavourites };

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)