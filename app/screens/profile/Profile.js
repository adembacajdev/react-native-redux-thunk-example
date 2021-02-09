import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getMyprofile } from '../../store/actions/users';
import Storage from '../../services/Storage';
import { Loading } from '../../components';

const Profile = (props) => {
    const { isLoading, data } = props.myProfile;
    useFocusEffect(useCallback(() => {
        getMyProfileAsync()
    }, []))

    async function getMyProfileAsync() {
        const userId = await Storage.getUserId();
        if (userId) {
            props.getMyprofile(userId)
        }
    }

    return (
        isLoading
            ?
            <Loading />
            :
            <View>
                <Text>Profile.js</Text>
            </View>
    )
}

const mapStateToProps = (state) => ({
    myProfile: state.myProfile
})

const mapDispatchToProps = { getMyprofile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);