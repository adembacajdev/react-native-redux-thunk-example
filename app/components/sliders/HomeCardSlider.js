import React, { useCallback } from 'react';
import { useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    OnCardArrow, OffCardArrow, OnDyqanet, OffDyqanet, OnNew, OffNew, OnRent, OffRent, OnDiscount, OffDiscount, OffAll, OnAll
} from '../../assets/images';
import { fonts } from '../../constants';

export const HomeCardSlider = ({ category, setCategory }) => {
    const scrollviewRef = useRef(null);

    const _openAll = useCallback(() => {
        if (category === 'tegjitha') {
            setCategory('none')
        } else {
            scrollviewRef.current.scrollTo({ x: 0, y: 0, animated: true })
            setCategory('tegjitha');
        }
    }, [category]);
    const _openDyqanet = useCallback(() => { setCategory(category === 'dyqanet' ? 'none' : 'dyqanet') }, [category]);
    const _openNew = useCallback(() => { setCategory(category === 'new' ? 'none' : 'new') }, [category]);
    const _openRent = useCallback(() => { setCategory(category === 'rent' ? 'none' : 'rent') }, [category]);
    const _openDiscount = useCallback(() => {
        if (category === 'discount') {
            setCategory('none')
        } else {
            scrollviewRef.current.scrollToEnd({ animated: true });
            setCategory('discount')
        }
    }, [category]);

    return (
        <View style={styles.container}>
            <ScrollView ref={scrollviewRef} horizontal={true} showsHorizontalScrollIndicator={false}>
                {/* Te gjitha */}
                <TouchableOpacity onPress={_openAll} style={[styles.card, styles[category === 'tegjitha' ? 'active' : 'inactive'], { marginLeft: 0 }]}>
                    {category === 'tegjitha' ? <OnAll /> : <OffAll />}
                    <Text style={styles[category === 'tegjitha' ? 'activeText' : 'inactiveText']}>Të Gjitha</Text>
                    {category === 'tegjitha' ? <OnCardArrow /> : <OffCardArrow />}
                </TouchableOpacity>
                {/* Dyqanet */}
                <TouchableOpacity onPress={_openDyqanet} style={[styles.card, styles[category === 'dyqanet' ? 'active' : 'inactive']]}>
                    {category === 'dyqanet' ? <OnDyqanet /> : <OffDyqanet />}
                    <Text style={styles[category === 'dyqanet' ? 'activeText' : 'inactiveText']}>Dyqanet</Text>
                    {category === 'dyqanet' ? <OnCardArrow /> : <OffCardArrow />}
                </TouchableOpacity>
                {/* New */}
                <TouchableOpacity onPress={_openNew} style={[styles.card, styles[category === 'new' ? 'active' : 'inactive']]}>
                    {category === 'new' ? <OnNew /> : <OffNew />}
                    <Text style={styles[category === 'new' ? 'activeText' : 'inactiveText']}>Arritjet e reja</Text>
                    {category === 'new' ? <OnCardArrow /> : <OffCardArrow />}
                </TouchableOpacity>
                {/* Rent */}
                <TouchableOpacity onPress={_openRent} style={[styles.card, styles[category === 'rent' ? 'active' : 'inactive']]}>
                    {category === 'rent' ? <OnRent /> : <OffRent />}
                    <Text style={styles[category === 'rent' ? 'activeText' : 'inactiveText']}>Me qera</Text>
                    {category === 'rent' ? <OnCardArrow /> : <OffCardArrow />}
                </TouchableOpacity>
                {/* Discount */}
                <TouchableOpacity onPress={_openDiscount} style={[styles.card, styles[category === 'discount' ? 'active' : 'inactive']]}>
                    {category === 'discount' ? <OnDiscount /> : <OffDiscount />}
                    <Text style={styles[category === 'discount' ? 'activeText' : 'inactiveText']}>Me zbritje</Text>
                    {category === 'discount' ? <OnCardArrow /> : <OffCardArrow />}
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