import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export const Input = ({
    label, isNumeric, isEmail, isTextarea, placeholder, width, flex, onBlur, ref, value, onChangeText, isPassword, hasError
}) => {
    return (
        <View style={[styles.container, { width: width ? width : '100%', flex }]}>
            <Text style={styles.label}>{label}</Text>
            <View style={
                [
                    styles.inputParent,
                    {
                        borderColor: hasError ? '#EF3E4A' : 'rgba(0, 0, 0, 0.25)',
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
                    value={value}
                    onChangeText={onChangeText}
                    ref={ref}
                    onBlur={onBlur}
                    secureTextEntry={isPassword}
                    autoCapitalize="none"
                    textContentType={'oneTimeCode'}
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