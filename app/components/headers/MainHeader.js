import React from 'react';
import { View, Text, TochableOpacity, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MenuIcon, HeaderDress, MessagesIcon } from '../../assets/images';

export const MainHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity>
                    <MenuIcon />
                </TouchableOpacity>
                <HeaderDress />
            </View>
            <View style={styles.middle}>
                <Text style={styles.title}>
                    Ballina
                </Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity>
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
    }
})