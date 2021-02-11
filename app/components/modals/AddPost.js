import React, { useState, useCallback } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { fonts } from '../../constants';
import { BackHeader, PickerInput, PickCategory } from '../index';
import { NativeButton, Input, PickerButton } from '../index';
import { useForm, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';

export const AddPostModal = ({ isOpen, toggle }) => {
    const [selectedSizes, selectSizes] = useState([]);
    const [forRent, setForRent] = useState(false);
    //Category
    const [categoryModal, toggleCategoryModal] = useState(false);
    const [selectedCategory, selectCategory] = useState([]);

    const allSizes = useSelector(state => state.allSizes);
    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = (body) => console.log('body', body);

    const _toggleCategoryModal = useCallback(() => { toggleCategoryModal(!categoryModal) }, [categoryModal]);

    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={isOpen}
            onRequestClose={toggle}
        >
            <SafeAreaView style={styles.container}>
                <BackHeader goBack={toggle} title="Shto produkt" />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <TouchableOpacity style={styles.addImage}>
                        <Text style={styles.addImageText}>Shto imazhe</Text>
                    </TouchableOpacity>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                label="Emri i produktit"
                                placeholder="Emri i productit tuaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.title}
                                errorText="This field is required*"
                                value={value}
                            />
                        )}
                        name="title"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Madhësitë në dispozicion</Text>
                        <FlatList
                            style={{ marginLeft: -10 }}
                            showsVerticalScrollIndicator={false}
                            data={allSizes?.data}
                            renderItem={({ item, index }) => {
                                var isSelected = false;
                                let sizeExist = selectedSizes.filter(size => size?._id === item?._id);
                                if (sizeExist.length > 0) isSelected = true;
                                else isSelected = false;

                                const _selectSize = () => {
                                    let sizeExist = selectedSizes.filter(size => size?._id === item?._id);
                                    if (sizeExist.length > 0) {
                                        let newArray = selectedSizes.filter(size => size?._id !== item?._id);
                                        selectSizes(newArray)
                                    } else {
                                        let newArrayList = [...selectedSizes, item];
                                        selectSizes(newArrayList)
                                    }
                                }
                                return (
                                    <PickerButton
                                        isSelected={isSelected}
                                        marginLeft={10}
                                        marginBottom={10}
                                        label={item?.size_name}
                                        width={30}
                                        height={20}
                                        color="brown"
                                        fontSize={10}
                                        onPress={_selectSize}
                                    />
                                )
                            }}
                            horizontal={false}
                            numColumns={7}
                            keyExtractor={(item, index) => String(item?._id)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Me qera</Text>
                        <View style={styles.buttonsRow}>
                            <PickerButton
                                isSelected={forRent === true}
                                marginBottom={10}
                                label={'Po'}
                                width={60}
                                height={25}
                                color="brown"
                                fontSize={10}
                                onPress={() => setForRent(true)}
                            />
                            <PickerButton
                                isSelected={forRent === false}
                                marginLeft={10}
                                marginBottom={10}
                                label={'Jo'}
                                width={60}
                                height={25}
                                color="brown"
                                fontSize={10}
                                onPress={() => setForRent(false)}
                            />
                        </View>
                    </View>
                    {forRent && <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                label="Çmimi me qera"
                                placeholder="Çmimi me qera i produktit tuaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.rent_price}
                                errorText="This field is required*"
                                value={value}
                            />
                        )}
                        name="rent_price"
                        rules={{ required: true }}
                        defaultValue=""
                    />}
                    <PickerInput
                        value={selectedCategory?.category_name ?? false}
                        onPress={_toggleCategoryModal}
                        label="Kategoria"
                        placeholder="Kategoria e produktit tuaj këtu"
                    />
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                isTextarea
                                label="Përshkrimi i produktit"
                                placeholder="Përshkrimi i produktit tuaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.description}
                                errorText="This field is required*"
                                value={value}
                            />
                        )}
                        name="description"
                        rules={{ required: false }}
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                label="Çmimi"
                                placeholder="Çmimi i produktit tuaj këtu"
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                hasError={errors.price}
                                errorText="This field is required*"
                                value={value}
                            />
                        )}
                        name="price"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </ScrollView>
                {categoryModal && <View onTouchStart={_toggleCategoryModal} style={styles.overLayer} />}
                <PickCategory isOpen={categoryModal} toggle={_toggleCategoryModal} selectedCategory={selectedCategory} selectCategory={selectCategory} />
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollView: {
        flexGrow: 1,
        padding: 30
    },
    addImage: {
        width: '100%',
        height: 50,
        borderRadius: 3,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    addImageText: {
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20
    },
    label: {
        fontSize: 15,
        fontFamily: fonts.REGULAR,
        color: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 5
    },
    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center'
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