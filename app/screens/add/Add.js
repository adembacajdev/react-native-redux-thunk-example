import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { AddPostModal, LoginModal, SignupModal } from '../../components';
import { connect } from 'react-redux';
import { setIsLoggedIn } from '../../store/actions/authorization';

const Add = ({ navigation, isLoggedIn, setIsLoggedIn }) => {
    const [isOpen, toggleModal] = useState(false);
    const [isLogin, toggleLogin] = useState(false);
    const [isSignup, toggleSignup] = useState(false);

    useFocusEffect(useCallback(() => {
        if (isLoggedIn) {
            _toggleModal();
        } else {
            _toggleLogin();
        }
    }, []))

    // useEffect(() => {
    //     if (!isOpen && !isLoggedIn && !isLogin && !isSignup) navigation.navigate('Home');
    // }, [isOpen, isLoggedIn, isLogin, isSignup])

    const _toggleModal = () => toggleModal(!isOpen);
    const _toggleLogin = () => toggleLogin(!isLogin);
    const _toggleSignup = () => toggleSignup(!isSignup);

    const _toggleBoth = () => {
        _toggleLogin();
        _toggleSignup();
    }

    const _login = () => {
        setIsLoggedIn(true);
        toggleModal(true);
        toggleLogin(false);
        toggleSignup(false);
    }

    return (
        <View>
            <AddPostModal isOpen={isOpen} toggle={_toggleModal} />
            <LoginModal _login={_login} _goToSignUp={_toggleBoth} isOpen={isLogin} toggle={_toggleLogin} />
            <SignupModal isOpen={isSignup} toggle={_toggleSignup} />
        </View>
    )
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
const mapDispatchToProps = { setIsLoggedIn };

export default connect(mapStateToProps, mapDispatchToProps)(Add);