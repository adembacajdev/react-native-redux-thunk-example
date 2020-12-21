import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { AddPostModal } from '../../components';

const Add = ({ navigation }) => {
    const [isOpen, toggleModal] = useState(false);

    useFocusEffect(useCallback(() => {
        _toggleModal();
    }, []))

    useEffect(() => {
        if (!isOpen) navigation.navigate('Home');
    }, [isOpen])

    const _toggleModal = () => toggleModal(!isOpen)

    return (
        <View>
            <AddPostModal isOpen={isOpen} toggle={_toggleModal} />
        </View>
    )
}

export default Add;