import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BackHeader, MessagesList } from '../../components';
import { connect } from 'react-redux';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react/cjs/react.development';
import styles from './style';

const Messages = ({ navigation, setCurrentRoute }) => {
    const _goBack = () => navigation.goBack();

    useFocusEffect(useCallback(() => {
        setCurrentRoute('Messages');
        return () => {
            setCurrentRoute('');
        }
    }, []))
    return (
        <>
            <BackHeader title="Mesazhet" goBack={_goBack} />
            {/* <ScrollView contentContainerStyle={styles.container}> */}
                <MessagesList />
            {/* </ScrollView> */}
        </>
    )
}

export const mapStateToProps = null;
export const mapDispatchToProps = { setCurrentRoute };

export default connect(mapStateToProps, mapDispatchToProps)(Messages);