import React from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthHeader } from '../index';
import { fonts } from '../../constants';
import { Input, PasswordInput, NativeButton } from '../../components';

export const LoginModal = ({ isOpen, toggle, _goToSignUp, _login }) => {
    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={isOpen}
            onRequestClose={toggle}
        >
            {/* <SafeAreaView style={styles.container}> */}
            <AuthHeader goBack={toggle} title="Shto produkt" />
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={{ paddingHorizontal: 30 }}>
                    <View style={styles.titleRow}>
                        <Text style={styles.titleText}>Kyçu</Text>
                    </View>
                    <Input label="Email adresa" placeholder="Email adresa juaj këtu" />
                    <PasswordInput label="Fjalëkalimi" placeholder="Fjalëkalimi juaj këtu" />
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Keni harruar fjalëkalimin?</Text>
                    </TouchableOpacity>
                    <NativeButton onPress={_login} label="Kyçu" color="pink" marginBottom={100} />
                </View>
                <View style={styles.bottomPart}>
                    <NativeButton onPress={_goToSignUp} label="Nuk keni llogari? Regjistrohuni" color="green" />
                </View>
            </ScrollView>
            {/* </SafeAreaView> */}
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
    }
})