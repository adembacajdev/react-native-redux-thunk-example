import React, { useCallback, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { BackHeader, Input, PickCity, PickerInput } from '../../components';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { useFocusEffect } from '@react-navigation/native';
import { cities, fonts } from '../../constants';
import { useForm, Controller } from "react-hook-form";
import { updateOneUser } from '../../store/actions/users';
import Storage from '../../services/Storage';

const ShopAddress = (props) => {
    //City
    const [cityModal, toggleCityModal] = useState(false);
    const [selectedCity, selectCity] = useState([]);

    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = (body) => {
        const _body = {
            ...body,
            city: selectedCity?.value,
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
    const _toggleCityModal = useCallback(() => { toggleCityModal(!cityModal) }, [cityModal]);

    useFocusEffect(useCallback(() => {
        props.setCurrentRoute('Messages');
        reset({
            shop_address: props.myProfile?.data?.shop_address,
        })
        const city = props.myProfile?.data?.city ? cities.filter(item => item?.value === props.myProfile?.data?.city) : false
        city && selectCity(city[0])
        return () => {
            props.setCurrentRoute('')
        }
    }, []))

    return (
        <>
            <BackHeader goBack={_goBack} title="Adresa e dyqanit" rightButton rightPress={handleSubmit(onSubmit)} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                label="Adresa e dyqanit"
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
                    <PickerInput
                        value={selectedCity?.label ?? false}
                        onPress={_toggleCityModal}
                        label="Qyteti"
                        placeholder="Qyteti juaj këtu"
                    />
                </>
            </ScrollView>
            {cityModal && <View onTouchStart={_toggleCityModal} style={styles.overLayer} />}
            <PickCity isOpen={cityModal} toggle={_toggleCityModal} selectedCity={selectedCity} selectCity={selectCity} />
        </>
    )
}

const mapStateToProps = (state) => ({
    myProfile: state.myProfile
});

const mapDispatchToProps = { setCurrentRoute, updateOneUser };

export default connect(mapStateToProps, mapDispatchToProps)(ShopAddress);

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