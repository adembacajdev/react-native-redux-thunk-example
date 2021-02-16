import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native';
import { NativeButton } from '../index';
import { fonts } from '../../constants';
import { MyProductsContext } from '../../services/Contexts';

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) UIManager.setLayoutAnimationEnabledExperimental(true);

export const EditProductSheet = ({ isOpen, toggle, _deleteProduct, _editProduct }) => {
    const { setProductToDelete } = useContext(MyProductsContext);
    const [bottom, setBottom] = useState(-190);

    useEffect(() => {
        if (isOpen) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(0)
        } else {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(-190);
            setProductToDelete('');
        }
    }, [isOpen])

    return (
        <View style={[styles.container, { bottom }]}>
            <NativeButton onPress={_editProduct} label="Edito" color="green" marginBottom={20} />
            <NativeButton onPress={_deleteProduct} label="Fshij produktin" color="red" />
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