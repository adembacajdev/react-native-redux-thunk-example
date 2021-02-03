import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuIcon, HeaderDress, MessagesIcon } from '../../assets/images';
import { fonts } from '../../constants';
import { useNavigation } from '@react-navigation/native';

export const MainHeader = ({ openDrawer, openMessages }) => {
    const navigation = useNavigation();
    const _openMessages = () => navigation.navigate('Messages');
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={openDrawer}>
                    <MenuIcon />
                </TouchableOpacity>
                <HeaderDress style={{ marginLeft: 15 }} />
            </View>
            <View style={styles.middle}>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={_openMessages}>
                    <MessagesIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    middle: {
        flex: 2,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.SEMIBOLD
    }
})