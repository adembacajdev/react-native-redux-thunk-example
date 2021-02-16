import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { BackHeader, MyProductsList, EditProductSheet } from '../../components';
import { fonts } from '../../constants';
import { useFocusEffect } from '@react-navigation/native';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { MyProductsContext } from '../../services/Contexts';
import { deleteOnePost } from '../../store/actions/posts';

const MyProducts = (props) => {
    const [bottomSheet, toggleBottomSheet] = useState(false);
    const [productToDelete, setProductToDelete] = useState('');

    const _goBack = () => {
        props.navigation.goBack()
        props.setCurrentRoute('')
    },
        _toggleBottomSheet = useCallback(() => { toggleBottomSheet(!bottomSheet) }, [bottomSheet]),
        _addNewPost = () => props.navigation.navigate('Add');

    useFocusEffect(useCallback(() => {
        props.setCurrentRoute('Messages');
    }, []))

    const _deleteProduct = useCallback(() => {
        if (productToDelete !== '') {
            _toggleBottomSheet();
            Alert.alert(
                'Konfirmim',
                'A jeni i sigurt qe doni te fshini produktin?',
                [
                    { text: 'Po', onPress: () => props.deleteOnePost(productToDelete) },
                    {
                        text: 'Mbyll',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                ],
                { cancelable: false }
            );
        }
    }, [productToDelete]);

    const _editProduct = useCallback(() => {
        _toggleBottomSheet();
        props.navigation.navigate('EditProduct', { productId: productToDelete });
    }, [productToDelete])
    return (
        <>
            <MyProductsContext.Provider value={{ productToDelete, setProductToDelete }}>
                <BackHeader goBack={_goBack} title="Produktet e mia" rightButton rightLabel="Shto" rightPress={_addNewPost} />
                <View style={styles.container}>
                    <MyProductsList _toggleBottomSheet={_toggleBottomSheet} />
                </View>
                {bottomSheet && <View onTouchStart={_toggleBottomSheet} style={styles.overLayer} />}
                <EditProductSheet _editProduct={_editProduct} _deleteProduct={_deleteProduct} isOpen={bottomSheet} toggle={_toggleBottomSheet} />
            </MyProductsContext.Provider>
        </>
    )
}

const mapStateToProps = null
const mapDispatchToProps = { setCurrentRoute, deleteOnePost }

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
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