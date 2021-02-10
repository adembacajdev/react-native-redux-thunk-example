import React, { useCallback, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { BackHeader, Input, PickCity, PickerInput, PickDate } from '../../components';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { useFocusEffect } from '@react-navigation/native';
import { fonts } from '../../constants';
import { useForm, Controller } from "react-hook-form";
import moment from 'moment';
import { updateOneUser } from '../../store/actions/users';
import Storage from '../../services/Storage';
import { Facebook, Instagram } from '../../assets/images';

const ShopDetails = (props) => {

    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = (body) => {
        const _body = {
            ...body,
            user_type: props.myProfile?.data?.user_type,
            phone_number: parseInt(body?.phone_number)
        }
        updateMyProfile(_body);
    }

    async function updateMyProfile(body) {
        const user_id = await Storage.getUserId();
        if (user_id) {
            props.updateOneUser(user_id, body);
            props.navigation.goBack();
        } else {
            Alert.alert('Error', 'No ID found!')
        }
    }

    const _goBack = () => props.navigation.goBack();

    useFocusEffect(useCallback(() => {
        props.setCurrentRoute('Messages');
        reset({
            shop_name: props.myProfile?.data?.shop_name,
            email: props.myProfile?.data?.email,
            phone_number: props.myProfile?.data?.phone_number.toString(),
            facebook: props.myProfile?.data?.facebook,
            instagram: props.myProfile?.data?.instagram,
            shop_description: props.myProfile?.data?.shop_description,
        })
        return () => {
            props.setCurrentRoute('')
        }
    }, []))

    return (
        <>
            <BackHeader goBack={_goBack} title="Detajet  e dyqanit" rightButton rightPress={handleSubmit(onSubmit)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <TouchableOpacity style={styles.topRow}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{props.myProfile?.data?.shop_name[0]?.toUpperCase()}{props.myProfile?.data?.shop_name[1]?.toUpperCase()}</Text>
                    </View>
                    <Text style={styles.editImageText}>Edito foton e profilit</Text>
                </TouchableOpacity>
                <>
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
                                label="Numri kontaktues"
                                placeholder="Numri kontaktues i dyqanit tuaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.phone_number}
                                errorText="This field is required*"
                                value={value}
                                isNumeric
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
                </>
            </ScrollView>
        </>
    )
}

const mapStateToProps = (state) => ({
    myProfile: state.myProfile,
});

const mapDispatchToProps = { setCurrentRoute, updateOneUser };

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetails);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    topRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 0.5,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.25)'
    },
    circleText: {
        fontFamily: fonts.REGULAR,
        fontSize: 35,
        color: 'rgba(0, 0, 0, 0.25)'
    },
    editImageText: {
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)',
        marginLeft: 15
    },
    overLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    socialRow: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
})