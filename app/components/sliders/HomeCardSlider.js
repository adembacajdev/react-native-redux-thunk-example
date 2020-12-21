import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    OnCardArrow, OffCardArrow, OnDyqanet, OffDyqanet, OnNew, OffNew, OnRent, OffRent, OnDiscount, OffDiscount
} from '../../assets/images';
import { fonts } from '../../constants';

export const HomeCardSlider = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {/* Dyqanet */}
                <TouchableOpacity style={[styles.card, styles.active, { marginLeft: 0 }]}>
                    <OnDyqanet />
                    <Text style={styles.activeText}>Dyqanet</Text>
                    <OnCardArrow />
                </TouchableOpacity>
                {/* New */}
                <TouchableOpacity style={[styles.card, styles.inactive]}>
                    <OffNew />
                    <Text style={styles.inactiveText}>Arritjet e reja</Text>
                    <OffCardArrow />
                </TouchableOpacity>
                {/* Rent */}
                <TouchableOpacity style={[styles.card, styles.inactive]}>
                    <OffRent />
                    <Text style={styles.inactiveText}>Me qera</Text>
                    <OnCardArrow />
                </TouchableOpacity>
                {/* Discount */}
                <TouchableOpacity style={[styles.card, styles.inactive]}>
                    <OffDiscount />
                    <Text style={styles.inactiveText}>Me zbritje</Text>
                    <OnCardArrow />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30
    },
    card: {
        width: 100,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginLeft: 15
    },
    active: {
        backgroundColor: '#F98B9C'
    },
    inactive: {
        backgroundColor: '#FBECEE'
    },
    activeText: {
        fontSize: 14,
        fontFamily: fonts.BOLD,
        color: 'white'
    },
    inactiveText: {
        fontSize: 14,
        fontFamily: fonts.BOLD,
        color: '#F98B9C'
    }
})