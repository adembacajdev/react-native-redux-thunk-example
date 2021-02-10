import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackIcon } from '../../assets/images';
import { fonts } from '../../constants';
import { NativeHeaderButton } from '../index';

export const BackHeader = ({ goBack, title, rightButton, rightPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={goBack}>
                    <BackIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.right}>
                {rightButton && <NativeHeaderButton onPress={rightPress} width={50} color="lightGreen" label="Ruaj" />}
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