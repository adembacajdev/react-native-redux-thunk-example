import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import { Facebook, Instagram } from '../../assets/images';
import { useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Input, PasswordInput, NativeButton, AuthHeader, PickCity, PickerInput, PickDate } from '../../components';

export const SignupModal = ({ isOpen, toggle, _goToLogin, _postOneUser }) => {
    const { isLoading, data, posted } = useSelector(state => state.postingUser);
    const [topTab, setTopTab] = useState(0);
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
        if (body?.password.length < 6 || (body?.password !== body?.confirm_password)) {
            setError('password');
            setError('confirm_password');
        } else {
            const _body = {
                ...body,
                user_type: topTab,
                city: selectedCity?._id,
                birthday: date,
            }
            _postOneUser(_body);
        }
    }

    useEffect(() => {
        if (posted) _goToLogin();
    }, [isLoading, data, posted])

    const _toggleCityModal = useCallback(() => { toggleCityModal(!cityModal) }, [cityModal]);
    const _toggleDateModal = useCallback(() => {
        toggleDateModal(!dateModal);
        showDatepicker();
    }, [dateModal]);

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

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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
    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={isOpen}
            onRequestClose={toggle}
        >
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
                                <PickerInput
                                    value={selectedCity?.city_name ?? false}
                                    onPress={_toggleCityModal}
                                    label="Qyteti"
                                    placeholder="Qyteti juaj këtu"
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
                {cityModal && <View onTouchStart={_toggleCityModal} style={styles.overLayer} />}
                <PickCity isOpen={cityModal} toggle={_toggleCityModal} selectedCity={selectedCity} selectCity={selectCity} />
                {dateModal && <View onTouchStart={_toggleDateModal} style={styles.overLayer} />}
                <PickDate children={<CalendarView />} isOpen={dateModal} toggle={_toggleCityModal} selectedDate={selectedDate} selectDate={selectDate} />
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
    },
    socialRow: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    overLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
})