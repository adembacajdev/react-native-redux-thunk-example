import React, { useState, useCallback } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, Alert, Platform } from 'react-native';
import { fonts } from '../../constants';
import { BackHeader, PickerInput, PickCategory, LaunchCameraSheet } from '../index';
import { NativeButton, Input, PickerButton } from '../index';
import { useForm, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Trash } from '../../assets/images';
import Storage from '../../services/Storage';
import { useEffect } from 'react/cjs/react.development';

export const AddPostModal = ({ isOpen, toggle, _post, _goHome }) => {
    const [images, setImages] = useState([]);
    const [imagesFlatlist, refreshImagesFlatlist] = useState([]);
    const [cameraSheet, toggleCameraSheet] = useState(false);
    const [selectedSizes, selectSizes] = useState([]);
    const [forRent, setForRent] = useState(false);
    //Category
    const [categoryModal, toggleCategoryModal] = useState(false);
    const [selectedCategory, selectCategory] = useState({});

    //Selectors
    const allSizes = useSelector(state => state.allSizes);
    const postingPost = useSelector(state => state.postingPost);

    const { control, handleSubmit, errors, setError, reset } = useForm();
    const onSubmit = async (body) => {
        let _body = {
            ...body,
            for_rent: forRent,
            category: selectedCategory?._id,
            sizes: selectedSizes.map(size => size?._id),
        }
        let user_id = await Storage.getUserId();
        if (user_id) {
            _post(user_id, images, _body);
        }
    }

    const _toggleCategoryModal = useCallback(() => { toggleCategoryModal(!categoryModal) }, [categoryModal]);
    const _toggleCameraSheet = useCallback(() => { toggleCameraSheet(!cameraSheet) }, [cameraSheet])

    const _launchCamera = () => {
        _toggleCameraSheet();
        launchCamera({ mediaType: 'photo', includeBase64: false, maxWidth: 800, maxHeight: 600, rotation: 360 }, res => {
            if (!res.didCancel || !res.errorCode) {
                let file = { name: res.fileName, type: res.type, uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri }
                let newArrayImages = images;
                newArrayImages.push(file);
                setImages(newArrayImages);
                refreshImagesFlatlist(!imagesFlatlist);
            }
        });
    }

    const _launchGallery = () => {
        _toggleCameraSheet();
        launchImageLibrary({ mediaType: 'photo', includeBase64: true, maxWidth: 800, maxHeight: 600, rotation: 360 }, res => {
            if (!res.didCancel || !res.error) {
                let file = { name: res.fileName, type: res.type, uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri }
                let newArrayImages = images;
                newArrayImages.push(file);
                setImages(newArrayImages);
                refreshImagesFlatlist(!imagesFlatlist);
            }
        });
    }

    useEffect(() => {
        if(!postingPost?.isLoading && postingPost.posted){
            _goHome();
        }
    }, [postingPost])

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
                    <TouchableOpacity onPress={_toggleCameraSheet} style={styles.addImage}>
                        <Text style={styles.addImageText}>Shto imazhe</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={{ marginLeft: -25, paddingTop: 15 }}
                        showsVerticalScrollIndicator={false}
                        data={images}
                        extraData={imagesFlatlist}
                        renderItem={({ item, index }) => {
                            const _removeImage = () => {
                                let allImages = images;
                                let removedImage = allImages.filter(image => image?.uri !== item?.uri)
                                setImages(removedImage);
                                refreshImagesFlatlist(!imagesFlatlist)
                            }
                            return (
                                <View style={styles.imageView}>
                                    <Image source={{ uri: item?.uri }} style={{ width: '100%', height: '100%', borderRadius: 5 }} />
                                    <TouchableOpacity onPress={_removeImage} style={styles.trashButton}>
                                        <Trash />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        horizontal={false}
                        numColumns={4}
                        keyExtractor={(item, index) => String(index)}
                    />
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
                    <NativeButton isLoading={postingPost?.isLoading} onPress={handleSubmit(onSubmit)} label="Shto" color="green" />
                </ScrollView>
                {categoryModal && <View onTouchStart={_toggleCategoryModal} style={styles.overLayer} />}
                <PickCategory isOpen={categoryModal} toggle={_toggleCategoryModal} selectedCategory={selectedCategory} selectCategory={selectCategory} />
                {cameraSheet && <View onTouchStart={_toggleCameraSheet} style={styles.overLayer} />}
                <LaunchCameraSheet _openCamera={_launchCamera} _openGallery={_launchGallery} isOpen={cameraSheet} toggle={_toggleCameraSheet} />
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
    },
    imageView: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginLeft: 25,
        marginBottom: 20
    },
    trashButton: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        top: -30 / 2,
        right: -30 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CE7082',
    }
})