import React, { useCallback, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { BackHeader, Input, PickCity, PickerInput, PickDate, LaunchCameraSheet } from '../../components';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { useFocusEffect } from '@react-navigation/native';
import { fonts } from '../../constants';
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { updateOneUser } from '../../store/actions/users';
import Storage from '../../services/Storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const PersonalDetails = (props) => {
    //Camera
    const [cameraSheet, toggleCameraSheet] = useState(false);
    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(null);
    //City
    const [cityModal, toggleCityModal] = useState(false);
    const [selectedCity, selectCity] = useState([]);
    //Birthday
    const [dateModal, toggleDateModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedDate, selectDate] = useState(null);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = (body) => {
        const _body = {
            ...body,
            user_type: props.myProfile?.data?.user_type,
            city: selectedCity?._id,
            birthday: date,
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
            name: props.myProfile?.data?.name,
            surname: props.myProfile?.data?.surname,
            email: props.myProfile?.data?.email
        })
        setDate(props.myProfile?.data?.birthday);
        selectDate(moment(props.myProfile?.data?.birthday).format('DD/MM/YYYY'));
        const city = props.myProfile?.data?.city ? props.allCities?.data.filter(item => item?._id === props.myProfile?.data?.city) : false
        city && selectCity(city[0])
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

    const _goBack = () => props.navigation.goBack();
    const _toggleCityModal = useCallback(() => { toggleCityModal(!cityModal) }, [cityModal]);
    const _toggleDateModal = useCallback(() => {
        toggleDateModal(!dateModal);
        showDatepicker();
    }, [dateModal]);
    const _toggleCameraSheet = useCallback(() => { toggleCameraSheet(!cameraSheet) }, [cameraSheet]);

    //Birthday
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        selectDate(moment(currentDate).format('DD/MM/YYYY'));
        toggleDateModal(Platform.OS === 'ios');
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => showMode('date');

    const CalendarView = () => {
        return show ?
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={onChange}
            /> : null
    }
    //

    //Camera
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
            <BackHeader goBack={_goBack} title="Detajet personale" rightButton rightPress={handleSubmit(onSubmit)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={_toggleCameraSheet} style={styles.topRow}>
                    {(showImage !== null && showImage !== undefined && showImage !== '') && <Image source={{ uri: showImage }} style={styles.avatar} />}
                    {(showImage === null || showImage === undefined || showImage === '') && <View style={styles.circle}>
                        <Text style={styles.circleText}>{props.myProfile?.data?.name[0]?.toUpperCase()}{props.myProfile?.data?.surname[0]?.toUpperCase()}</Text>
                    </View>}
                    <Text style={styles.editImageText}>Edito foton e profilit</Text>
                </TouchableOpacity>
                <>
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
                    <PickerInput
                        value={selectedCity?.city_name ?? false}
                        onPress={_toggleCityModal}
                        label="Qyteti"
                        placeholder="Qyteti juaj këtu"
                    />
                    <PickerInput
                        value={selectedDate ?? false}
                        onPress={_toggleDateModal}
                        label="Data e lindjes"
                        placeholder="Data e linjdes tuaj këtu"
                    />
                </>
            </ScrollView>
            {cityModal && <View onTouchStart={_toggleCityModal} style={styles.overLayer} />}
            <PickCity isOpen={cityModal} toggle={_toggleCityModal} selectedCity={selectedCity} selectCity={selectCity} />
            {dateModal && <View onTouchStart={_toggleDateModal} style={styles.overLayer} />}
            <PickDate children={<CalendarView />} isOpen={dateModal} toggle={_toggleCityModal} selectedDate={selectedDate} selectDate={selectDate} />
            {cameraSheet && <View onTouchStart={_toggleCameraSheet} style={styles.overLayer} />}
            <LaunchCameraSheet _openCamera={_launchCamera} _openGallery={_launchGallery} isOpen={cameraSheet} toggle={_toggleCameraSheet} />
        </>
    )
}

const mapStateToProps = (state) => ({
    myProfile: state.myProfile,
    allCities: state.allCities
});

const mapDispatchToProps = { setCurrentRoute, updateOneUser };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);

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
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 0.5
    },
})