import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Zara } from '../../assets/images';
import { fonts } from '../../constants';

export const HomeSlider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Zara style={{ marginRight: 15 }} />
                <View style={styles.texts}>
                    <Text style={styles.title}>Zara</Text>
                    <Text style={styles.description}>{'Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores wedding dress.\bLorem ipsum Lorem ipsum Dolores wedding dress. Lorem ipsum Dolores.'}</Text>
                </View>
            </View>
            <View style={styles.lines}>
                <View style={styles.inactiveLine} />
                <View style={styles.activeLine} />
                <View style={styles.inactiveLine} />
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
        backgroundColor: 'rgba(121, 163, 177, 0.2)'
    },
    activeLine: {
        flex: 1,
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(121, 163, 177, 1)'
    }
})