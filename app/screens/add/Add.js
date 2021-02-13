import React from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { AddPostModal, LoginModal, SignupModal } from '../../components';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authorization';
import { postOneUser } from '../../store/actions/users';
import { postOnePost } from '../../store/actions/posts';

const Add = ({ navigation, isLoggedIn, login, postOneUser, postOnePost }) => {
    const { status, isLoading } = isLoggedIn;
    const [isOpen, toggleModal] = useState(false);
    const [isLogin, toggleLogin] = useState(false);
    const [isSignup, toggleSignup] = useState(false);

    useFocusEffect(useCallback(() => {
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

    const _goToLogin = () => {
        toggleSignup(false);
        toggleLogin(true);
    }

    const _login = (body) => login(body);
    const _postOneUser = (body) => postOneUser(body);

    return (
        <View>
            <AddPostModal _goHome={_toggleModal} _post={postOnePost} isOpen={isOpen} toggle={_toggleModal} />
            <LoginModal _isLoggedIn={_isLoggedIn} _login={_login} _goToSignUp={_toggleBoth} isOpen={isLogin} toggle={_toggleLogin} />
            <SignupModal isOpen={isSignup} toggle={_toggleSignup} _goToLogin={_goToLogin} _postOneUser={_postOneUser} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
});
const mapDispatchToProps = { login, postOneUser, postOnePost };

export default connect(mapStateToProps, mapDispatchToProps)(Add);