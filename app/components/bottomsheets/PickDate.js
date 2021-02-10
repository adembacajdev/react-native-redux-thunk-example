import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { fonts } from '../../constants';

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) UIManager.setLayoutAnimationEnabledExperimental(true);

export const PickDate = ({ isOpen, selectedDate, selectDate, toggle, children }) => {
    const [bottom, setBottom] = useState(-700);

    useEffect(() => {
        if (isOpen) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(0)
        } else {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(-700)
        }
    }, [isOpen])

    return (
        <View style={[styles.container, { bottom }]}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Zgjidhni ditëlindjen tuaj</Text>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        right: 0,
        left: 0,
        paddingVertical: 30,
        height: 500,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
    },
    scrollView: {
        flexGrow: 1
    },
    titleRow: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontFamily: fonts.BOLD,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.9)'
    }
})