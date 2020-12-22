import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Zara } from '../../assets/images';
import { fonts } from '../../constants';
import ViewPager from '@react-native-community/viewpager';

export const HomeSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <View style={styles.container}>
            <ViewPager onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)} initialPage={0} style={{ width: '100%', height: 100 }}>
                {sliders.map((item, index) => {
                    return (
                        <View key={item.key} style={styles.card}>
                            <Zara style={{ marginRight: 15 }} />
                            <View style={styles.texts}>
                                <Text style={styles.title}>Zara</Text>
                                <Text style={styles.description}>{'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.'}</Text>
                            </View>
                        </View>
                    )
                })}
            </ViewPager>
            <View style={styles.lines}>
                {sliders.map((item, index) => {
                    return <View style={styles[index === currentPage ? 'activeLine' : 'inactiveLine']} />
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    card: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "rgba(112, 112, 112, 0.25)",
        flexDirection: 'row',
        alignItems: 'center'
    },
    texts: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.BOLD
    },
    description: {
        fontSize: 10,
        fontFamily: fonts.LIGHT,
        maxWidth: '85%'
    },
    lines: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    inactiveLine: {
        flex: 1,
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(121, 163, 177, 0.2)',
        marginRight: 5
    },
    activeLine: {
        flex: 1,
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(121, 163, 177, 1)'
    }
})

const sliders = [
    { id: 1, key: "1", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.' },
    { id: 2, key: "2", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.' },
    { id: 3, key: "3", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.' },
    { id: 4, key: "4", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.' },
    { id: 5, key: "5", title: 'Zara', description: 'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.' },
]