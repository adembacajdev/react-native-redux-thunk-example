import React, { useCallback, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { BackHeader, Input, LaunchCameraSheet } from '../../components';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { useFocusEffect } from '@react-navigation/native';
import { fonts } from '../../constants';
import { useForm, Controller } from "react-hook-form";
import { updateOneUser, postProfilePicture } from '../../store/actions/users';
import Storage from '../../services/Storage';
import { Facebook, Instagram } from '../../assets/images';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ShopDetails = (props) => {
    const [cameraSheet, toggleCameraSheet] = useState(false);
    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(null);

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
            if (props.myProfile?.data?.profile_picture !== image?.uri) {
                props.updateOneUser(user_id, body, true, image);
                props.navigation.goBack();
            } else {
                props.updateOneUser(user_id, body, false, null);
                props.navigation.goBack();
            }
        } else {
            Alert.alert('Error', 'No ID found!')
        }
    }

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
        if (
            props.myProfile?.data?.profile_picture !== null
            &&
            props.myProfile?.data?.profile_picture !== undefined
            &&
            props.myProfile?.data?.profile_picture !== ''
        ) setShowImage(props.myProfile?.data?.profile_picture);
        return () => {
            props.setCurrentRoute('')
        }
    }, []))

    //oneline functions
    const _goBack = () => props.navigation.goBack();
    const _toggleCameraSheet = useCallback(() => { toggleCameraSheet(!cameraSheet) }, [cameraSheet]);

    const _launchCamera = () => {
        _toggleCameraSheet();
        launchCamera({ mediaType: 'photo', includeBase64: false, maxWidth: 800, maxHeight: 600, rotation: 360 }, res => {
            try {
                if (!res.didCancel || !res.errorCode) {
                    let file = { name: res.fileName, type: res.type, uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri }
                    setImage(file);
                    setShowImage(file.uri)
                }
            } catch (e) { console.log('error', e.message) }
        });
    }

    const _launchGallery = () => {
        _toggleCameraSheet();
        launchImageLibrary({ mediaType: 'photo', includeBase64: true, maxWidth: 800, maxHeight: 600, rotation: 360 }, res => {
            try {
                if (!res.didCancel || !res.errorCode) {
                    let file = { name: res.fileName, type: res.type, uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri }
                    setImage(file);
                    setShowImage(file.uri)
                }
            } catch (e) { console.log('error', e.message) }
        });
    }

    return (
        <>
            <BackHeader goBack={_goBack} title="Detajet  e dyqanit" rightButton rightPress={handleSubmit(onSubmit)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={_toggleCameraSheet} style={styles.topRow}>
                    {(showImage !== null && showImage !== undefined && showImage !== '') && <Image source={{ uri: showImage }} style={styles.avatar} />}
                    {(showImage === null || showImage === undefined || showImage === '') && <View style={styles.circle}>
                        <Text style={styles.circleText}>{props.myProfile?.data?.shop_name[0]?.toUpperCase()}{props.myProfile?.data?.shop_name[1]?.toUpperCase()}</Text>
                    </View>}
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
            {cameraSheet && <View onTouchStart={_toggleCameraSheet} style={styles.overLayer} />}
            <LaunchCameraSheet _openCamera={_launchCamera} _openGallery={_launchGallery} isOpen={cameraSheet} toggle={_toggleCameraSheet} />
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
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 0.5
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