import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export const Input = ({ label, isNumeric, isEmail, isTextarea, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={
                [
                    styles.inputParent,
                    {
                        height: isTextarea ? 'auto' : 50,
                        minHeight: isTextarea ? 100 : 50,
                        alignItems: isTextarea ? 'flex-start' : 'center',
                        paddingVertical: isTextarea ? 5 : 0
                    }
                ]
            }>
                <TextInput
                    isNumeric={isNumeric}
                    keyboardType={isNumeric ? 'phone-pad' : isEmail ? "email-address" : 'default'}
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    style={styles.textinput}
                    placeholder={placeholder}
                    multiline={isTextarea}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20
    },
    inputParent: {
        width: '100%',
        height: 50,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    label: {
        fontSize: 15,
        fontFamily: fonts.REGULAR,
        color: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 5
    },
    textinput: {
        paddingVertical: 0,
        fontSize: 15,
        fontFamily: fonts.REGULAR,
        color: 'rgba(0, 0, 0, 0.9)',
        width: '100%'
    }
})