import React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, StyleSheet, ActivityIndicator } from 'react-native';
import { fonts } from '../../constants';

export const NativeHeaderButton = ({ height, width, color, icon, label, marginBottom, onPress, isLoading }) => {
    return (
        Platform.select({
            ios: (
                <TouchableOpacity disabled={isLoading} onPress={onPress} style={[styles.container, styles[color], { width: width ? width : '100%', height: height ? height : 30, marginBottom }]}>
                    {
                        isLoading
                            ?
                            <ActivityIndicator size={30} color="#FFFFFF" />
                            :
                            icon
                                ?
                                icon
                                :
                                <Text style={styles.labelStyle}>{label}</Text>
                    }
                </TouchableOpacity>
            ),
            android: (
                <TouchableNativeFeedback disabled={isLoading} onPress={onPress}>
                    <View style={[styles.container, styles[color], { width: width ? width : '100%', marginBottom }]}>
                        {
                            isLoading
                                ?
                                <ActivityIndicator size={30} color="#FFFFFF" />
                                :
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
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pink: {
        backgroundColor: '#FF8B8B'
    },
    green: {
        backgroundColor: '#7DC8BA'
    },
    lightGreen: {
        backgroundColor: '#80CBBD'
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
        fontSize: 14,
        fontFamily: fonts.BOLD,
        color: 'white'
    }
})