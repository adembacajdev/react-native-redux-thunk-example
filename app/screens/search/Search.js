import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useCallback } from 'react/cjs/react.development';
import { SearchIcon } from '../../assets/images';
import { MainHeader, SearchItems } from '../../components';
import styles from './style';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

let searchTimeout = null;
const Search = ({ navigation }) => {
    const { data: allPosts } = useSelector(state => state.allPosts);

    const textinputRef = useRef(null);
    const [isFocused, toggleFocused] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [flatList, refreshFlatlist] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const _openDrawer = () => navigation.openDrawer();
    const _openMessages = () => navigation.navigate('Messages');

    useFocusEffect(useCallback(() => {
        textinputRef.current.focus();
    }, []));

    const onChangeText = (text) => {
        setSearchValue(text);
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (Array.isArray(allPosts) && text.length > 0) {
                let filteredData = allPosts.filter(item => item?.title?.includes(text));
                setSearchData(filteredData);
                refreshFlatlist(!flatList);
            }else{
                setSearchData([]);
                refreshFlatlist(!flatList);
            }
        }, 300);
    }

    return (
        <>
            <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} title="Search" />
            <View style={styles.container}>
                <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                    <View style={styles[isFocused ? 'focusedSearch' : 'unfocusedSearch']}>
                        <SearchIcon />
                        <TextInput
                            value={searchValue}
                            onBlur={() => toggleFocused(false)}
                            onFocus={() => toggleFocused(true)}
                            ref={textinputRef}
                            style={styles.textinput}
                            placeholder="Search accessories"
                            placeholderTextColor="#C0C0C0"
                            onChangeText={onChangeText}
                        />
                    </View>
                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultsText}>{Array.isArray(searchData) ? searchData.length : 0} rezultate</Text>
                    </View>
                </View>
                <SearchItems
                    data={searchData}
                    extraData={flatList}
                />
            </View>
        </>
    )
}

export default Search;