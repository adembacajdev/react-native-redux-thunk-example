import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native';
import { NativeButton } from '../index';
import { fonts } from '../../constants';

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) UIManager.setLayoutAnimationEnabledExperimental(true);

export const LaunchCameraSheet = ({ isOpen, toggle, _openCamera, _openGallery }) => {
    const [bottom, setBottom] = useState(-190);

    useEffect(() => {
        if (isOpen) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(0)
        } else {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(-190)
        }
    }, [isOpen])

    return (
        <View style={[styles.container, { bottom }]}>
            <NativeButton onPress={_openCamera} label="Hap kamerën" color="green" marginBottom={20} />
            <NativeButton onPress={_openGallery} label="Shto nga Galeria" color="green" />
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
        height: 180,
        backgroundColor: 'white',
        paddingHorizontal: 30,
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