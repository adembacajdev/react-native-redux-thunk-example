import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { useCallback } from 'react/cjs/react.development';
import { fonts } from '../../constants';

export const PasswordInput = ({ label, placeholder, onBlur, ref, value, onChangeText, hasError }) => {
    const [isPassword, togglePassword] = useState(true);
    const _togglePassword = useCallback(() => { togglePassword(!isPassword) }, [isPassword]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputParent, {
                borderColor: hasError ? '#EF3E4A' : 'rgba(0, 0, 0, 0.25)',
            }]}>
                <View style={styles.inputLeft}>
                    <TextInput
                        secureTextEntry={isPassword}
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        style={styles.textinput}
                        placeholder={isPassword ? '********' : placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        ref={ref}
                        onBlur={onBlur}
                        autoCapitalize="none"
                        textContentType={'oneTimeCode'}
                    />
                </View>
                <View style={styles.inputRight}>
                    <TouchableOpacity onPress={_togglePassword}>
                        <Text style={styles.hidePasswordText}>{isPassword ? 'Shfaq' : 'Fsheh'}</Text>
                    </TouchableOpacity>
                </View>
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
        paddingHorizontal: 15
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
    },
    inputLeft: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputRight: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    hidePasswordText: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: 'rgba(0, 0, 0, 0.9)'
    }
})