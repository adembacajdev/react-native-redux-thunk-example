import React, { useCallback, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import Storage from '../../services/Storage';
import { Loading, MainHeader, NativeButton } from '../../components';
import styles from './style';
import { ItemRightArrow } from '../../assets/images';
import Auth from '../../services/Auth';
//Redux actions
import { getAllCommentsPerUser } from '../../store/actions/comments';
import { getMyprofile } from '../../store/actions/users';
import { getAllMyPosts } from '../../store/actions/posts';

const Profile = (props) => {
    const { isLoading, data } = props.myProfile;

    useEffect(() => {
        if (!props.isLoggedIn.status) {
            props.navigation.navigate('Login')
        } else {
            _getMyDependencies();
        }
    }, [props.isLoggedIn]);

    async function _getMyDependencies() {
        const userId = await Storage.getUserId();
        if (userId) {
            props.getMyprofile(userId);
            props.getAllCommentsPerUser(userId);
            props.getAllMyPosts(userId);
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
                            {(data?.profile_picture !== null && data?.profile_picture !== undefined && data?.profile_picture !== '') && <Image source={{ uri: data.profile_picture }} style={styles.avatar} />}
                            {(data?.profile_picture === null || data?.profile_picture === undefined || data?.profile_picture === '') &&
                                <View style={styles.circle}>
                                    <Text style={styles.circleText}>{data?.name[0]?.toUpperCase()}{data?.surname[0]?.toUpperCase()}</Text>
                                </View>}
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
                                <Text style={styles.subtitleItem}>{props?.allUserComments?.data.length} komente</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('MyProducts')} style={styles.itemCard}>
                            <View style={styles.leftItemCard}>
                                <Text style={styles.titleItem}>Produktet</Text>
                                <Text style={styles.subtitleItem}>{props?.allMyPosts?.data.length} produkte të regjistruara</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                    </>}
                    {data?.user_type === 1 && <>
                        <Text style={styles.title}>Profili i dyqanit</Text>
                        <View style={styles.topRow}>
                            {data?.profile_picture && <Image source={{ uri: data.profile_picture }} style={styles.avatar} />}
                            {!data?.profile_picture &&
                                <View style={styles.circle}>
                                    <Text style={styles.circleText}>{data?.shop_name[0]?.toUpperCase()}{data?.shop_name[1]?.toUpperCase()}</Text>
                                </View>}
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
                                <Text style={styles.subtitleItem}>{props?.allMyPosts?.data.length} produkte të regjistruara</Text>
                            </View>
                            <View style={styles.rightItemCard}>
                                <ItemRightArrow />
                            </View>
                        </TouchableOpacity>
                    </>}
                    {props.isLoggedIn?.status && <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <NativeButton onPress={() => { Auth.logout(); }} label="Ç'Kyçu" color="pink" />
                    </View>}
                </ScrollView>
            </>
    )
}

const mapStateToProps = (state) => ({
    myProfile: state.myProfile,
    isLoggedIn: state.isLoggedIn,
    allUserComments: state.allUserComments,
    allMyPosts: state.allMyPosts
})

const mapDispatchToProps = { getMyprofile, getAllCommentsPerUser, getAllMyPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);