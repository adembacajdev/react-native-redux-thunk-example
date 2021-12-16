import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Modal, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, Switch, Platform } from 'react-native';
import { categories, fonts, sizes } from '../../constants';
import {
    BackHeader, PickerInput, PickCategory, LaunchCameraSheet, NativeButton, Input, PickerButton, EditProductSheet
} from '../../components';
import { useForm, Controller } from "react-hook-form";
import { useSelector, connect } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Trash } from '../../assets/images';
import Storage from '../../services/Storage';
import { useFocusEffect } from '@react-navigation/native';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { getOnePosts, updateOnePost } from '../../store/actions/posts';

export const EditProduct = (props) => {
    const { route, navigation, postingPost } = props,
        [images, setImages] = useState([]),
        [imagesFlatlist, refreshImagesFlatlist] = useState([]),
        [cameraSheet, toggleCameraSheet] = useState(false),
        [selectedSizes, selectSizes] = useState([]),
        [forRent, setForRent] = useState(false),
        //Category
        [categoryModal, toggleCategoryModal] = useState(false),
        [selectedCategory, selectCategory] = useState({}),

        //Form Handler
        { control, handleSubmit, errors, setError, reset, watch } = useForm(),
        onSubmit = async (body) => {
            let _body = {
                ...body,
                for_rent: forRent,
                category: selectedCategory?.value,
                sizes: selectedSizes.map(size => size?.value),
            }
            if (route.params.productId) {
                props.updateOnePost(route.params.productId, images, _body, navigation);
                navigation.goBack();
            }
        },

        _toggleCategoryModal = useCallback(() => { toggleCategoryModal(!categoryModal) }, [categoryModal]),
        _toggleCameraSheet = useCallback(() => { toggleCameraSheet(!cameraSheet) }, [cameraSheet]),
        _goBack = useCallback(() => { navigation.goBack() }, []),

        _launchCamera = () => {
            _toggleCameraSheet();
            launchCamera({ mediaType: 'photo', includeBase64: false, maxWidth: 800, maxHeight: 600, rotation: 360 }, res => {
                if (!res.didCancel || !res.errorCode) {
                    let file = {
                        name:
                            res.fileName,
                        type: res.type,
                        uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri,
                        photo: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri,
                        isNew: true
                    }
                    let newArrayImages = images;
                    newArrayImages.push(file);
                    setImages(newArrayImages);
                    refreshImagesFlatlist(!imagesFlatlist);
                }
            });
        },

        _launchGallery = () => {
            _toggleCameraSheet();
            launchImageLibrary({ mediaType: 'photo', includeBase64: true, maxWidth: 800, maxHeight: 600, rotation: 360 }, res => {
                if (!res.didCancel || !res.error) {
                    let file = {
                        name: res.fileName,
                        type: res.type,
                        uri: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri,
                        photo: Platform.OS === 'ios' ? res.uri.replace('file://', '') : res.uri,
                        isNew: true
                    }
                    let newArrayImages = images;
                    newArrayImages.push(file);
                    setImages(newArrayImages);
                    refreshImagesFlatlist(!imagesFlatlist);
                }
            });
        };

    useEffect(() => { if (!postingPost?.isLoading && postingPost.posted) _goBack(); }, [postingPost])

    useFocusEffect(useCallback(() => {
        props.setCurrentRoute('Messages');
        setImages([]);
        selectSizes([]);
        selectCategory({});
        if (route.params.productId) props.getOnePosts(route.params.productId);
        return () => {
            props.setCurrentRoute('')
        }
    }, []));

    useEffect(() => {
        const {
            images, title, description, category, user_id, price, discount, discount_from, discount_to, for_rent, rent_price,
        } = props.onePost.data;
        setImages(images);
        refreshImagesFlatlist(!imagesFlatlist);
        reset({
            title,
            description,
            price: String(price),
            discount,
            for_rent,
            rent_price,
            discount_from: String(discount_from),
            discount_to: String(discount_to)
        });
        selectCategory(categories.filter(item => item?.value === category)[0]);
        let newSetSizes = [];
        Array.isArray(data?.sizes) && data?.sizes.forEach(size => {
            let sizeExist = sizes.filter(item => item?.value === size);
            if (sizeExist.length > 0) newSetSizes.push(sizeExist[0]);
        })
        selectSizes(newSetSizes);
    }, [props])

    return (
        <SafeAreaView style={styles.container}>
            <BackHeader goBack={_goBack} title="Edito produktin" />
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
                            let removedImage = allImages.filter(image => image?._id !== item?._id)
                            setImages(removedImage);
                            refreshImagesFlatlist(!imagesFlatlist)
                        }
                        return (
                            <View style={styles.imageView}>
                                <Image source={{ uri: item?.photo }} style={{ width: '100%', height: '100%', borderRadius: 5 }} />
                                <TouchableOpacity onPress={_removeImage} style={styles.trashButton}>
                                    <Trash />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    horizontal={false}
                    numColumns={3}
                    keyExtractor={(item, index) => String(item?._id)}
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
                        data={sizes}
                        renderItem={({ item, index }) => {
                            var isSelected = false;
                            let sizeExist = selectedSizes.filter(size => size?.value === item?.value);
                            if (sizeExist.length > 0) isSelected = true;
                            else isSelected = false;

                            const _selectSize = () => {
                                let sizeExist = selectedSizes.filter(size => size?.value === item?.value);
                                if (sizeExist.length > 0) {
                                    let newArray = selectedSizes.filter(size => size?.value !== item?.value);
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
                                    label={item?.label}
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
                        keyExtractor={(item, index) => String(item?.value)}
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
                    value={selectedCategory?.title ?? false}
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
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <View style={styles.switchContainer}>
                            <Switch
                                trackColor={{ false: "white", true: "#625261" }}
                                thumbColor={value ? "white" : 'white'}
                                ios_backgroundColor="white"
                                onValueChange={(newValue) => onChange(newValue)}
                                value={value}
                            />
                            <Text style={styles.switchText}>Me zbritje</Text>
                        </View>
                    )}
                    name="discount"
                    rules={{ required: false }}
                    defaultValue=""
                />
                {Boolean(watch('discount')) && <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            label="Zbritja nga"
                            placeholder="Çmimi i zbritjes nga..."
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            hasError={errors.discount_from}
                            errorText="This field is required*"
                            value={value}
                        />
                    )}
                    name="discount_from"
                    rules={{ required: true }}
                    defaultValue=""
                />}
                {Boolean(watch('discount')) && <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            label="Zbritja deri"
                            placeholder="Çmimi i zbritjes deri..."
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            hasError={errors.discount_to}
                            errorText="This field is required*"
                            value={value}
                        />
                    )}
                    name="discount_to"
                    rules={{ required: true }}
                    defaultValue=""
                />}
                <NativeButton isLoading={postingPost?.isLoading} onPress={handleSubmit(onSubmit)} label="Ruaj" color="green" />
            </ScrollView>
            {categoryModal && <View onTouchStart={_toggleCategoryModal} style={styles.overLayer} />}
            <PickCategory isOpen={categoryModal} toggle={_toggleCategoryModal} selectedCategory={selectedCategory} selectCategory={selectCategory} />
            {cameraSheet && <View onTouchStart={_toggleCameraSheet} style={styles.overLayer} />}
            <LaunchCameraSheet _openCamera={_launchCamera} _openGallery={_launchGallery} isOpen={cameraSheet} toggle={_toggleCameraSheet} />
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    onePost: state.onePost,
    postingPost: state.postingPost
});
const mapDispatchToProps = { setCurrentRoute, getOnePosts, updateOnePost };

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);

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
    },
    switchContainer: {
        width: '100%',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    switchText: {
        marginLeft: 10,
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)'
    }
})