import React, { useEffect } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthHeader } from '../index';
import { fonts } from '../../constants';
import { Input, PasswordInput, NativeButton } from '../../components';
import { useForm, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';

export const LoginModal = ({ isOpen, toggle, _goToSignUp, _login, _isLoggedIn }) => {
    const { isLoading, status } = useSelector(state => state.isLoggedIn);
    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = (body) => _login(body);
    useEffect(() => {
        if (!isLoading && status) {
            _isLoggedIn();
        }
    }, [status, isLoading])
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
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                label="Email adresa"
                                placeholder="Email adresa juaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.email}
                                errorText="This field is required*"
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                label="Fjalëkalimi"
                                placeholder="Fjalëkalimi juaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.email}
                                errorText="This field is required*"
                                value={value}
                                isPassword
                            />
                        )}
                        name="password"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Keni harruar fjalëkalimin?</Text>
                    </TouchableOpacity>
                    <NativeButton isLoading={isLoading} onPress={handleSubmit(onSubmit)} label="Kyçu" color="pink" marginBottom={100} />
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