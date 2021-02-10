import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {
    DrawerBack, DrawerItemArrow, BrideDress, EveningDress, TraditionalDress, WeddingAccessories, OtherAccessories,
    Jeweleery, Bags, Shoes, BeautyAndHair
} from '../../assets/images';
import { fonts } from '../../constants';
import { leftDrawerMenu as menu } from '../../constants';
import { NativeButton } from '../index';
import Auth from '../../services/Auth';
import Storage from '../../services/Storage';
import store from '../../store';

export const LeftDrawerComponent = ({ navigation }) => {
    const _closeDrawer = () => navigation.closeDrawer();

    function renderAuthButton() {
        const { isLoggedIn } = store.getState();
        if (isLoggedIn?.status) {
            return <NativeButton onPress={() => {
                Auth.logout();
                _closeDrawer();
            }} label="Ç'Kyçu" color="pink" />
        } else {
            return <NativeButton onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Login')
            }} label="Kyçu" color="pink" />
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={_closeDrawer}>
                    <DrawerBack />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Kategoritë</Text>
            {
                menu.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => {
                            navigation.navigate('Category', { title: item.title });
                            navigation.closeDrawer();
                        }} style={styles.item}>
                            <View style={styles.leftItem}>
                                {item.icon}
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                            <View style={styles.rightItem}>
                                <DrawerItemArrow />
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 }}>
                {renderAuthButton()}
            </View>
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
        elevation: 1,
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