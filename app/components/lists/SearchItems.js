import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { fonts } from '../../constants';
import DummyDressImage from '../../assets/images/dummyDressImage.png';
import { SearchArrow } from '../../assets/images';

export const SearchItems = ({ _headerComponent, data, extraData }) => {
    return (
        <FlatList
            style={styles.flatlist}
            ListHeaderComponent={_headerComponent}
            contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
            data={data}
            extraData={extraData}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <View style={styles.left}>
                        <Image source={{ uri: item?.images[0]?.photo }} style={{ width: 70, height: 65, marginRight: 10, borderRadius: 5 }} />
                        <View style={styles.texts}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity>
                            <SearchArrow />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            keyExtractor={(item, index) => String(index)}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    flatlist: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    card: {
        width: '100%',
        height: 75,
        borderRadius: 10,
        padding: 5,
        paddingRight: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 1,
        zIndex: 999999,
        marginBottom: 20
    },
    left: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#F98B9C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        fontFamily: fonts.BOLD,
        color: '#625261'
    },
    price: {
        fontSize: 15,
        fontFamily: fonts.LIGHT,
        color: '#625261'
    },
    texts: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    }
})