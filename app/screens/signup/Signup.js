import React, { useState } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import { Input, PasswordInput, NativeButton, AuthHeader, SignupModal } from '../../components';
import { Facebook, Instagram } from '../../assets/images';
import { connect } from 'react-redux';
import { postOneUser } from '../../store/actions/users';
import { useForm, Controller } from "react-hook-form";
import { useEffect } from 'react/cjs/react.development';

const Signup = (props) => {
    const { isLoading, data, posted } = props.postingUser;
    const [topTab, setTopTab] = useState(0);

    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = (body) => {
        if (body?.password.length < 6 || (body?.password !== body?.confirm_password)) {
            setError('password');
            setError('confirm_password');
        } else {
            const _body = {
                ...body, user_type: topTab
            }
            props.postOneUser(_body);
        }
    }

    useEffect(() => {
        if (posted) props.navigation.goBack();
    }, [isLoading, data, posted])
    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader title="Shto produkt" />
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
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Emri"
                                        placeholder="Emri juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.name}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="name"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Mbiemri"
                                        placeholder="Mbiemri juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.surname}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="surname"
                                rules={{ required: true }}
                                defaultValue=""
                            />
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
                                        label="Qyteti"
                                        placeholder="Qyteti juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.city}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="city"
                                rules={{ required: false }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Data e lindjes"
                                        placeholder="Data e lindjes juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.birthday}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="birthday"
                                rules={{ required: false }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <PasswordInput
                                        label="Fjalëkalimi"
                                        placeholder="Fjalëkalimi juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.password}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="password"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <PasswordInput
                                        label="Përsërit fjalëkalimin"
                                        placeholder="Përsërit fjalëkalimin këtu juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.confirm_password}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="confirm_password"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <NativeButton isLoading={isLoading} onPress={handleSubmit(onSubmit)} label="Regjistrohu" color="pink" marginBottom={20} />
                        </View>
                        :
                        <View>
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Emri i dyqanit"
                                        placeholder="Emri i dyqanit tuaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.shop_name}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="shop_name"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Email"
                                        placeholder="Email adresa e dyqanit tuaj këtu"
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
                                        label="Numri kontaktues"
                                        placeholder="Numri kontaktues i dyqanit tuaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.phone_number}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="phone_number"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <View style={styles.socialRow}>
                                <Controller
                                    control={control}
                                    render={({ onChange, onBlur, value }) => (
                                        <Input
                                            flex={1}
                                            label="Facebook"
                                            placeholder="Linku i dyqanit tuaj në Facebook"
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            hasError={errors.facebook}
                                            errorText="This field is required*"
                                            value={value}
                                        />
                                    )}
                                    name="facebook"
                                    rules={{ required: false }}
                                    defaultValue=""
                                />
                                <Facebook style={{ marginLeft: 10, marginBottom: -12 }} />
                            </View>
                            <View style={styles.socialRow}>
                                <Controller
                                    control={control}
                                    render={({ onChange, onBlur, value }) => (
                                        <Input
                                            flex={1}
                                            label="Instagram"
                                            placeholder="Linku i dyqanit tuaj në Instagram"
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            hasError={errors.instagram}
                                            errorText="This field is required*"
                                            value={value}
                                        />
                                    )}
                                    name="instagram"
                                    rules={{ required: false }}
                                    defaultValue=""
                                />
                                <Instagram style={{ marginLeft: 10, marginBottom: -12 }} />
                            </View>
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Qyteti"
                                        placeholder="Qyteti ku gjindet dyqani juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.city}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="city"
                                rules={{ required: false }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        label="Adresa"
                                        placeholder="Adresa e dyqanit tuaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.shop_address}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="shop_address"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        isTextarea
                                        label="Përshkrimi i dyqanit"
                                        placeholder="Përshkrimi i dyqanit tuaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.shop_description}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="shop_description"
                                rules={{ required: false }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <PasswordInput
                                        label="Fjalëkalimi"
                                        placeholder="Fjalëkalimi juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.password}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="password"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <PasswordInput
                                        label="Përsërit fjalëkalimin"
                                        placeholder="Përsërit fjalëkalimin këtu juaj këtu"
                                        onBlur={onBlur}
                                        onChangeText={(value) => onChange(value)}
                                        hasError={errors.confirm_password}
                                        errorText="This field is required*"
                                        value={value}
                                    />
                                )}
                                name="confirm_password"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                            <NativeButton onPress={handleSubmit(onSubmit)} label="Regjistrohu" color="pink" marginBottom={20} />
                        </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    postingUser: state.postingUser
});
const mapDispatchToProps = { postOneUser };

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

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
    },
    socialRow: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    }
})