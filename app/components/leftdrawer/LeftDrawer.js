import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {
    DrawerBack, DrawerItemArrow, BrideDress, EveningDress, TraditionalDress, WeddingAccessories, OtherAccessories,
    Jeweleery, Bags, Shoes, BeautyAndHair
} from '../../assets/images';
import { fonts } from '../../constants';

export const LeftDrawerComponent = ({ navigation }) => {
    const _closeDrawer = () => navigation.closeDrawer();
    const _goToBrideDresses = () => {
        navigation.navigate('Category', { title: 'Fustane nusërie' });
        navigation.closeDrawer();
    }
    const _goToEveningDresses = () => {
        navigation.navigate('Category', { title: 'Fustane mbrëmjesh' });
        navigation.closeDrawer();
    }
    const _goToTraditionalDresses = () => {
        navigation.navigate('Category', { title: 'Veshje tradicionale' });
        navigation.closeDrawer();
    }
    const _goToWeddingAccessories = () => {
        navigation.navigate('Category', { title: 'Aksesorë dasmash' });
        navigation.closeDrawer();
    }
    const _goToOtherAccessories = () => {
        navigation.navigate('Category', { title: 'Aksesorë tjerë' });
        navigation.closeDrawer();
    }
    const _goToJeweleries = () => {
        navigation.navigate('Category', { title: 'Stoli' });
        navigation.closeDrawer();
    }
    const _goToBags = () => {
        navigation.navigate('Category', { title: 'Çanta' });
        navigation.closeDrawer();
    }
    const _goToShoes = () => {
        navigation.navigate('Category', { title: 'Këpucë' });
        navigation.closeDrawer();
    }
    const _goToBeautyAndHairs = () => {
        navigation.navigate('Category', { title: 'Bukuri & flokë' });
        navigation.closeDrawer();
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={_closeDrawer}>
                    <DrawerBack />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Kategoritë</Text>
            {/* Fustan Nusërie */}
            <TouchableOpacity onPress={_goToBrideDresses} style={styles.item}>
                <View style={styles.leftItem}>
                    <BrideDress />
                    <Text style={styles.itemText}>Fustane nusërie</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Fustane mbremjesh */}
            <TouchableOpacity onPress={_goToEveningDresses} style={styles.item}>
                <View style={styles.leftItem}>
                    <EveningDress />
                    <Text style={styles.itemText}>Fustane mbrëmjesh</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Veshje tradicionale */}
            <TouchableOpacity onPress={_goToTraditionalDresses} style={styles.item}>
                <View style={styles.leftItem}>
                    <TraditionalDress />
                    <Text style={styles.itemText}>Veshje tradicionale</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Aksesorë dasmash */}
            <TouchableOpacity onPress={_goToWeddingAccessories} style={styles.item}>
                <View style={styles.leftItem}>
                    <WeddingAccessories />
                    <Text style={styles.itemText}>Aksesorë dasmash</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Aksesorë të tjerë */}
            <TouchableOpacity onPress={_goToOtherAccessories} style={styles.item}>
                <View style={styles.leftItem}>
                    <OtherAccessories />
                    <Text style={styles.itemText}>Aksesorë të tjerë</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Stoli */}
            <TouchableOpacity onPress={_goToJeweleries} style={styles.item}>
                <View style={styles.leftItem}>
                    <Jeweleery />
                    <Text style={styles.itemText}>Stoli</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Canta */}
            <TouchableOpacity onPress={_goToBags} style={styles.item}>
                <View style={styles.leftItem}>
                    <Bags />
                    <Text style={styles.itemText}>Çanta</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Këpucë */}
            <TouchableOpacity onPress={_goToShoes} style={styles.item}>
                <View style={styles.leftItem}>
                    <Shoes />
                    <Text style={styles.itemText}>Këpucë</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
            {/* Bukuri dhe flokë */}
            <TouchableOpacity onPress={_goToBeautyAndHairs} style={styles.item}>
                <View style={styles.leftItem}>
                    <BeautyAndHair />
                    <Text style={styles.itemText}>Bukuri & flokë</Text>
                </View>
                <View style={styles.rightItem}>
                    <DrawerItemArrow />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.BOLD,
        color: 'rgba(0, 0, 0, 0.9)',
        marginBottom: 50,
        paddingHorizontal: 15
    },
    item: {
        width: '100%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        shadowColor: "#F98B9C",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
        zIndex: 999999,
        marginBottom: 20,
        marginBottom: 10
    },
    leftItem: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    itemText: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: 'rgba(0, 0, 0, 0.8)',
        marginLeft: 20
    }
})