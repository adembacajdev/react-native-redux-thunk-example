import React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, StyleSheet, ActivityIndicator } from 'react-native';
import { fonts } from '../../constants';

export const PickerButton = ({ width, color, icon, label, marginBottom, onPress, isLoading, isSelected }) => {
    return (
        isSelected
            ?
            Platform.select({
                ios: (
                    <TouchableOpacity disabled={isLoading} onPress={onPress} style={[styles.container, styles[color], { width: width ? width : '100%', marginBottom }]}>
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
            :
            Platform.select({
                ios: (
                    <TouchableOpacity disabled={isLoading} onPress={onPress} style={[styles.borderContainer, styles[`${color}Border`], { width: width ? width : '100%', marginBottom }]}>
                        {
                            isLoading
                                ?
                                <ActivityIndicator size={30} color="#FFFFFF" />
                                :
                                icon
                                    ?
                                    icon
                                    :
                                    <Text style={[styles.labelStyleBorder, styles[`${color}Border`]]}>{label}</Text>
                        }
                    </TouchableOpacity>
                ),
                android: (
                    <TouchableNativeFeedback disabled={isLoading} onPress={onPress}>
                        <View style={[styles.borderContainer, styles[`${color}Border`], { width: width ? width : '100%', marginBottom }]}>
                            {
                                isLoading
                                    ?
                                    <ActivityIndicator size={30} color="#FFFFFF" />
                                    :
                                    icon
                                        ?
                                        icon
                                        :
                                        <Text style={[styles.labelStyleBorder, styles[`${color}Border`]]}>{label}</Text>
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
        justifyContent: 'center',
    },
    borderContainer: {
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1
    },
    pink: {
        backgroundColor: '#FF8B8B',
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
    },
    pinkBorder: {
        borderColor: '#FF8B8B',
        color: '#FF8B8B',
    },
    greenBorder: {
        borderColor: '#7DC8BA',
        color: '#7DC8BA',
    },
    purpleBorder: {
        borderColor: '#CE7082',
        color: '#CE7082',
    },
    redBorder: {
        borderColor: '#F2646E',
        color: '#F2646E',
    },
    brownBorder: {
        borderColor: '#625261',
        color: '#625261',
    },
    labelStyleBorder: {
        fontSize: 20,
        fontFamily: fonts.BOLD
    },
})