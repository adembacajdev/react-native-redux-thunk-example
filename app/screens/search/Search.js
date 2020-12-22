import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useCallback } from 'react/cjs/react.development';
import { SearchIcon } from '../../assets/images';
import { MainHeader, SearchItems } from '../../components';
import styles from './style';
import { useFocusEffect } from '@react-navigation/native';

const Search = ({ navigation }) => {
    const textinputRef = useRef(null);
    const [isFocused, toggleFocused] = useState(false);

    const _openDrawer = () => navigation.openDrawer();
    const _openMessages = () => navigation.navigate('Messages');

    useFocusEffect(useCallback(() => {
        textinputRef.current.focus();
    }, []));

    return (
        <>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} title="Search" />
            <View style={styles.container}>
                <SearchItems
                    _headerComponent={() => (
                        <>
                            <View style={styles[isFocused ? 'focusedSearch' : 'unfocusedSearch']}>
                                <SearchIcon />
                                <TextInput
                                    onBlur={() => toggleFocused(false)}
                                    onFocus={() => toggleFocused(true)}
                                    ref={textinputRef}
                                    style={styles.textinput}
                                    placeholder="Search accessories"
                                    placeholderTextColor="#C0C0C0"
                                />
                            </View>
                            <View style={styles.resultsContainer}>
                                <Text style={styles.resultsText}>2 rezultate</Text>
                            </View>
                        </>
                    )}
                />
            </View>
        </>
    )
}

export default Search;