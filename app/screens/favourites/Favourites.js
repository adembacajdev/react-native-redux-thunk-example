import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { MainHeader, FavouritesList } from '../../components';

const Favourites = () => {
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

export default Favourites