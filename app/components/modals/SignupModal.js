import React, { useState } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthHeader } from '../index';
import { fonts } from '../../constants';
import { Input, PasswordInput, NativeButton } from '../../components';

export const SignupModal = ({ isOpen, toggle, _goToSignUp }) => {
    const [topTab, setTopTab] = useState(0);
    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={isOpen}
            onRequestClose={toggle}
        >
            <SafeAreaView style={styles.container}>
                <AuthHeader goBack={toggle} title="Shto produkt" />
                <ScrollView contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
                    <View style={styles.titleRow}>
                        <Text style={styles.titleText}>Regjistrohu</Text>
                    </View>
                    <View style={styles.topTab}>
                        <TouchableOpacity
                            onPress={() => setTopTab(0)}
                            style={[styles.topLeftTab, { borderColor: topTab === 0 ? '#CE7082' : '#F3DBE0' }]}
                        >
                            <Text style={styles[topTab === 0 ? 'activeTabText' : 'inactiveTabText']}>Individual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setTopTab(1)}
                            style={[styles.topRightTab, { borderColor: topTab === 1 ? '#CE7082' : '#F3DBE0' }]}
                        >
                            <Text style={styles[topTab === 1 ? 'activeTabText' : 'inactiveTabText']}>Dyqan</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        topTab === 0
                            ?
                            <View>
                                <Input label="Emri" placeholder="Emri juaj këtu" />
                                <Input label="Mbiemri" placeholder="Mbiemri juaj këtu" />
                                <Input label="Email adresa" isEmail placeholder="Email adresa juaj këtu" />
                                <Input label="Qyteti" placeholder="Qyteti juaj këtu" />
                                <Input label="Data e lindjes" placeholder="Data e lindjes juaj këtu" />
                                <PasswordInput label="Fjalëkalimi" placeholder="Fjalëkalimi juaj këtu" />
                                <PasswordInput label="Përsërit fjalëkalimin" placeholder="Përsërit fjalëkalimin këtu juaj këtu" />
                                <NativeButton onPress={toggle} label="Regjistrohu" color="pink" marginBottom={20} />
                            </View>
                            :
                            <View>
                                <Input label="Emri i dyqanit" placeholder="Emri dyqanit tuaj këtu" />
                                <Input label="Email adresa" isEmail placeholder="Email adresa e dyqanit tuaj këtu" />
                                <Input label="Numri kontaktues" isNumeric placeholder="Numri kontaktues i dyqanit tuaj këtu" />
                                <Input label="Qyteti ku gjindet dyqani" placeholder="Qyteti i dyqanit tuaj këtu" />
                                <Input label="Adresa" placeholder="Adresa e dyqanit tuaj këtu" />
                                <Input isTextarea label="Përshkrimi i dyqanit" placeholder="Përshkrimi i dyqanit tuaj këtu" />
                                <PasswordInput label="Fjalëkalimi" placeholder="Fjalëkalimi juaj këtu" />
                                <PasswordInput label="Përsërit fjalëkalimin" placeholder="Përsërit fjalëkalimin këtu juaj këtu" />
                                <NativeButton onPress={toggle} label="Regjistrohu" color="pink" marginBottom={20} />
                            </View>
                    }
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollview: {
        flexGrow: 1,
        paddingHorizontal: 30
    },
    titleRow: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 60
    },
    titleText: {
        fontSize: 30,
        fontFamily: fonts.BOLD,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    forgotText: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: 'rgba(0, 0, 0, 0.9)',
        marginBottom: 50
    },
    bottomPart: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    topTab: {
        width: '100%',
        marginBottom: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topLeftTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2.5,
        borderBottomWidth: 1
    },
    topRightTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2.5,
        borderBottomWidth: 1
    },
    activeTabText: {
        fontSize: 16,
        fontFamily: fonts.BOLD,
        color: '#CE7082'
    },
    inactiveTabText: {
        fontSize: 16,
        fontFamily: fonts.BOLD,
        color: '#F3DBE0'
    }
})