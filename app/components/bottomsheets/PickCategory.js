import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native';
import { PickerButton } from '../index';
import { fonts } from '../../constants';
import { useSelector } from 'react-redux';

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) UIManager.setLayoutAnimationEnabledExperimental(true);

export const PickCategory = ({ isOpen, selectedCategory, selectCategory, toggle }) => {
    const [categories, setCategories] = useState([]);
    const [bottom, setBottom] = useState(-550);
    const { isLoading, data } = useSelector(state => state.allCategories);

    useEffect(() => {
        setCategories(data);
    }, [data, isLoading]);

    useEffect(() => {
        if (isOpen) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(0)
        } else {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setBottom(-550)
        }
    }, [isOpen])

    return (
        <View style={[styles.container, { bottom }]}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Zgjidhni kategorinë</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => {
                    let isSelected = item?._id === selectedCategory?._id;
                    const _selectCategory = () => {
                        selectCategory(item);
                        toggle();
                    }
                    return (
                        <PickerButton onPress={_selectCategory} isSelected={isSelected} color="brown" width="100%" label={item?.category_name} marginBottom={20} />
                    )
                }}
                keyExtractor={(item, index) => String(item?._id)}
            />
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