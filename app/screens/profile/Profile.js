import React, { useCallback } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getMyprofile } from '../../store/actions/users';
import Storage from '../../services/Storage';
import { Loading, MainHeader } from '../../components';
import styles from './style';
import dummyAvatar from '../../assets/images/dummyAvatar.png';
import { ItemRightArrow } from '../../assets/images';
import { useEffect } from 'react/cjs/react.development';

const Profile = (props) => {
    const { isLoading, data } = props.myProfile;
    useFocusEffect(useCallback(() => {
        getMyProfileAsync();
    }, []))

    useEffect(() => {
        if (!props.isLoggedIn.status) {
            props.navigation.navigate('Login')
        }
    }, [props.isLoggedIn]);

    async function getMyProfileAsync() {
        const userId = await Storage.getUserId();
        if (userId) {
            props.getMyprofile(userId)
        }
    }
    const _openDrawer = () => props.navigation.toggleDrawer();
    const _openMessages = () => props.navigation.navigate('Messages');

    return (
        isLoading
            ?
            <Loading />
            :
            <>
                <MainHeader openDrawer={_openDrawer} openMessages={_openMessages} />
                <ScrollView contentContainerStyle={styles.container}>
                    {data?.user_type === 0 && <>
                        <Text style={styles.title}>Profili personal</Text>
                        <View style={styles.topRow}>
                            <Image source={dummyAvatar} style={styles.avatar} />
                            <View style={styles.topRowRight}>
                                <Text style={styles.name}>{data?.name} {data?.surname}</Text>
                                <Text style={styles.accountDescription}>Llogari individuale</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('PersonalDetails')} style={styles.itemCard}>
                            <View style={styles.leftItemCard}>
                                <Text style={styles.titleItem}>Detajet personale</Text>
                                <Text style={styles.subtitleItem}>{data?.email}</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('MyComments')} style={styles.itemCard}>
                            <View style={styles.leftItemCard}>
                                <Text style={styles.titleItem}>Komentet e mia</Text>
                                <Text style={styles.subtitleItem}>4 komente</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                    </>}
                    {data?.user_type === 1 && <>
                        <Text style={styles.title}>Profili i dyqanit</Text>
                        <View style={styles.topRow}>
                            <Image source={dummyAvatar} style={styles.avatar} />
                            <View style={styles.topRowRight}>
                                <Text style={styles.name}>{data?.shop_name}</Text>
                                <Text style={styles.accountDescription}>Llogari biznesore</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('ShopDetails')} style={styles.itemCard}>
                            <View style={styles.leftItemCard}>
                                <Text style={styles.titleItem}>Detajet e dyqanit</Text>
                                <Text style={styles.subtitleItem}>{data?.email}</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('ShopAddress')} style={styles.itemCard}>
                            <View style={styles.leftItemCard}>
                                <Text style={styles.titleItem}>Adresa e dyqanit</Text>
                                <Text style={styles.subtitleItem}>{data?.shop_address}</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('MyProducts')} style={styles.itemCard}>
                            <View style={styles.leftItemCard}>
                                <Text style={styles.titleItem}>Produktet</Text>
                                <Text style={styles.subtitleItem}>27 produkte të regjistruara</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                    </>}
                </ScrollView>
            </>
    )
}

const mapStateToProps = (state) => ({
    myProfile: state.myProfile,
    isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = { getMyprofile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);