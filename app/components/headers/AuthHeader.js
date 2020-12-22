import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthLogo } from '../../assets/images';
import { fonts } from '../../constants';

export const AuthHeader = ({ goBack, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            </View>
            <View style={styles.middle}>
                <TouchableOpacity onPress={goBack}>
                    <AuthLogo />
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
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