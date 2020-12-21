import React from 'react';
import { View, Text } from 'react-native';
import { BackHeader } from '../../components';

const Messages = ({ navigation }) => {
    const _goBack = () => navigation.goBack();
    return (
        <View>
            <BackHeader title="Mesazhet" goBack={_goBack} />
            <Text>Messages.js</Text>
        </View>
    )
}

export default Messages;