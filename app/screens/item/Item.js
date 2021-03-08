import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { BackHeader, Loading, NativeButton } from '../../components';
import { connect } from 'react-redux';
import { setCurrentRoute } from '../../store/actions/routeActions';
import { useFocusEffect } from '@react-navigation/native';
import { getOnePosts } from '../../store/actions/posts';
import ViewPager from '@react-native-community/viewpager';
import { fonts } from '../../constants';
import { OffHeart, OnHeart } from '../../assets/images/Home';

const Item = (props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const { navigation, setCurrentRoute, route, onePost, allSizes } = props;
    const { isLoading, data } = onePost;
    const _goBack = () => navigation.goBack();

    useFocusEffect(useCallback(() => {
        props.getOnePosts(route?.params?.post_id)
        setCurrentRoute('Item');
        return () => {
            setCurrentRoute('');
        }
    }, []))

    const _onPageSelected = useCallback((e) => { setCurrentPage(e.nativeEvent.position) }, [currentPage]);

    const { _id, images, title, description, sizes, for_rent, price } = data;
    return (
        isLoading
            ?
            <Loading />
            :
            <>
                <BackHeader title="Mesazhet" goBack={_goBack} />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {Array.isArray(images) && images.length > 0
                        &&
                        <>
                            <ViewPager onPageSelected={_onPageSelected} initialPage={currentPage} style={{ width: '100%', height: 383 }}>
                                {images.map((item, index) => {
                                    return <Image key={item?._id} source={{ uri: item?.photo }} style={styles.image} />
                                })}
                            </ViewPager>
                            <View style={styles.lines}>
                                {images.map((item, index) => {
                                    return <View key={item?._id} style={styles[index === currentPage ? 'activeLine' : 'inactiveLine']} />
                                })}
                            </View>
                        </>
                    }
                    <View style={styles.body}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.label}>Madhësitë në dispozicion</Text>
                        <FlatList
                            style={{ marginBottom: 10 }}
                            data={allSizes?.data}
                            renderItem={({ item }) => {
                                const sizeExist = Array.isArray(sizes) ? sizes.filter(size => size === item._id) : [];
                                const isSelected = sizeExist.length > 0;
                                return (
                                    <View style={[styles.sizeContainer, {
                                        borderWidth: isSelected ? 0 : 1,
                                        borderColor: '#625261',
                                        backgroundColor: isSelected ? '#625261' : 'white'
                                    }]}>
                                        <Text style={[styles.sizeText, { color: isSelected ? 'white' : '#625261' }]}>{item?.size_name}</Text>
                                    </View>
                                )
                            }}
                            horizontal={false}
                            numColumns={5}
                            keyExtractor={(item, index) => String(item._id)}
                        />

                        <Text style={styles.label}>Me qera?</Text>
                        <View style={[styles.row, { marginBottom: 20 }]}>
                            <View style={for_rent ? [styles.trueButton, { marginRight: 10 }] : [styles.falseButton, { marginRight: 10 }]}>
                                <Text style={for_rent ? styles.trueText : styles.falseText}>Po</Text>
                            </View>
                            <View style={for_rent ? styles.falseButton : styles.trueButton}>
                                <Text style={for_rent ? styles.falseText : styles.trueText}>Jo</Text>
                            </View>
                        </View>

                        <Text style={styles.label}>Numri kontaktues</Text>
                        <Text style={styles.description}>+38349838861</Text>

                        <Text style={styles.label}>Adresa</Text>
                        <Text style={styles.description}>rr.Agim Ramadani, Prishtine</Text>

                        <Text style={styles.label}>Dyqani</Text>
                        <Text style={styles.description}>Zara home</Text>


                        <Text style={[styles.label, { marginTop: 10 }]}>Çmimi</Text>
                        <View style={styles.row}>
                            <Text style={styles.priceIcon}>$</Text>
                            <Text style={styles.priceText}>{price}</Text>
                        </View>

                        <View style={[styles.row, { marginTop: 25 }]}>
                            <TouchableOpacity style={styles.heartButton}>
                                <OffHeart style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactButton}>
                                <Text style={styles.buttonText}>Kontakto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </>
    )
}

export const mapStateToProps = (state) => ({
    onePost: state.onePost,
    allSizes: state.allSizes
});
export const mapDispatchToProps = { setCurrentRoute, getOnePosts };

export default connect(mapStateToProps, mapDispatchToProps)(Item);

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    inactiveLine: {
        flex: 1,
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(206, 112, 130, 0.2)',
        marginRight: 5
    },
    activeLine: {
        flex: 1,
        width: '100%',
        height: 2,
        backgroundColor: '#CE7082'
    },
    lines: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    body: {
        padding: 30
    },
    title: {
        fontFamily: fonts.BOLD,
        fontSize: 20,
        color: '#625261',
    },
    description: {
        fontFamily: fonts.REGULAR,
        fontSize: 14,
        color: '#625261',
        marginBottom: 20
    },
    label: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: '#625261',
    },
    sizeContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'red',
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    sizeText: {
        fontFamily: fonts.REGULAR,
        fontSize: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trueButton: {
        width: 60,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#625261',
        borderWidth: 1,
        borderColor: '#625261'
    },
    falseButton: {
        width: 60,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#625261'
    },
    trueText: {
        color: 'white',
        fontFamily: fonts.REGULAR,
        fontSize: 14
    },
    falseText: {
        color: '#625261',
        fontFamily: fonts.REGULAR,
        fontSize: 14
    },
    priceIcon: {
        fontFamily: fonts.LIGHT,
        fontSize: 20,
        color: '#CE7082'
    },
    priceText: {
        fontFamily: fonts.LIGHT,
        fontSize: 20,
        color: '#625261'
    },
    heartButton: {
        width: 50,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#FF8B8B',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    contactButton: {
        flex: 1,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#FF8B8B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: fonts.BOLD,
        fontSize: 20
    }
})