import React from 'react';
import { View, Text, Modal, SafeAreaView } from 'react-native';
import { BackHeader } from '../index';

export const AddPostModal = ({ isOpen, toggle }) => {
    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={isOpen}
            onRequestClose={toggle}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <BackHeader goBack={toggle} title="Shto produkt" />
                <Text>Modal</Text>
            </SafeAreaView>
        </Modal>
    )
}