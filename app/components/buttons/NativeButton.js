import React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export const NativeButton = ({ width, color, icon, label, marginBottom, onPress }) => {
    return (
        Platform.select({
            ios: (
                <TouchableOpacity onPress={onPress} style={[styles.container, styles[color], { width: width ? width : '100%', marginBottom }]}>
                    {
                        icon
                            ?
                            icon
                            :
                            <Text style={styles.labelStyle}>{label}</Text>
                    }
                </TouchableOpacity>
            ),
            android: (
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={[styles.container, styles[color], { width: width ? width : '100%', marginBottom }]}>
                        {
                            icon
                                ?
                                icon
                                :
                                <Text style={styles.labelStyle}>{label}</Text>
                        }
                    </View>
                </TouchableNativeFeedback>
            )
        })
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pink: {
        backgroundColor: '#FF8B8B'
    },
    green: {
        backgroundColor: '#7DC8BA'
    },
    purple: {
        backgroundColor: '#CE7082'
    },
    red: {
        backgroundColor: '#F2646E'
    },
    brown: {
        backgroundColor: '#625261'
    },
    labelStyle: {
        fontSize: 20,
        fontFamily: fonts.BOLD,
        color: 'white'
    }
})