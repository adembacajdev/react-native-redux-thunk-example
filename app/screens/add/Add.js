import React from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { AddPostModal, LoginModal, SignupModal } from '../../components';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authorization';

const Add = ({ navigation, isLoggedIn, login }) => {
    const { status, isLoading } = isLoggedIn;
    const [isOpen, toggleModal] = useState(false);
    const [isLogin, toggleLogin] = useState(false);
    const [isSignup, toggleSignup] = useState(false);

    useFocusEffect(useCallback(() => {
        console.log({ isOpen, isLogin, isSignup })
        if (status) {
            toggleModal(true);
        } else {
            toggleLogin(true);
        }
    }, [status, isLoading]));

    const _toggleModal = () => {
        toggleModal(!isOpen);
        toggleLogin(false);
        toggleSignup(false)
        navigation.navigate('Home');
    }
    const _toggleLogin = () => toggleLogin(!isLogin);
    const _toggleSignup = () => toggleSignup(!isSignup);

    const _toggleBoth = () => {
        _toggleLogin();
        _toggleSignup();
    }

    const _isLoggedIn = () => {
        _toggleLogin();
        toggleModal(true);
    }

    const _login = (body) => login(body);

    return (
        <View>
            <AddPostModal isOpen={isOpen} toggle={_toggleModal} />
            <LoginModal _isLoggedIn={_isLoggedIn} _login={_login} _goToSignUp={_toggleBoth} isOpen={isLogin} toggle={_toggleLogin} />
            <SignupModal isOpen={isSignup} toggle={_toggleSignup} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
});
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Add);