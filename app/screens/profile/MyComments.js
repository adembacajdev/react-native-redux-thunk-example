import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { BackHeader, MyCommentsList } from '../../components';
import { fonts } from '../../constants';
import { useFocusEffect } from '@react-navigation/native';
import { setCurrentRoute } from '../../store/actions/routeActions';

const MyComments = (props) => {
    const _goBack = () => props.navigation.goBack();

    useFocusEffect(useCallback(() => {
        props.setCurrentRoute('Messages');
        return () => {
            props.setCurrentRoute('')
        }
    }, []))
    return (
        <>
            <BackHeader goBack={_goBack} title="Komentet e mia" />
            <View style={styles.container}>
                <MyCommentsList />
            </View>
        </>
    )
}

const mapStateToProps = null
const mapDispatchToProps = { setCurrentRoute }

export default connect(mapStateToProps, mapDispatchToProps)(MyComments);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,
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
    }
})