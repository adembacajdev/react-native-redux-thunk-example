import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const ComponentLoading = ({ width, height }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <ActivityIndicator size={30} color="#EF3E4A" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})