import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ClockIcon } from '../../assets/images';
import { fonts } from '../../constants';

export const MessagesList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card}>
                            <View style={styles.leftCard}>
                                <Text style={styles.title}>Dyqani: {item?.store}</Text>
                                <Text style={styles.subtitle}>Emri i produktit: {item?.productName}</Text>
                            </View>
                            <View style={styles.rightCard}>
                                <ClockIcon style={{ marginBottom: 5 }} />
                                <Text style={styles.timeStyle}>{item?.time}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => String(item.id)}
            />
        </View>
    )
}

const messages = [
    { id: 1, store: 'Zara', productName: 'Fustan Nusërie', time: '2 hours ago' },
    { id: 2, store: 'Springfield', productName: 'Fustan Nusërie', time: '2 hours ago' },
    { id: 3, store: 'Pull&Bear', productName: 'Fustan Nusërie', time: '2 hours ago' },
    { id: 4, store: 'LC Waikiki', productName: 'Fustan Nusërie', time: '2 hours ago' },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    card: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 10,
        flexDirection: 'row'
    },
    leftCard: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rightCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.BOLD,
        color: 'rgba(0, 0, 0, 0.7)'
    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.LIGHT,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    timeStyle: {
        fontSize: 14,
        fontFamily: fonts.LIGHT,
        color: 'rgba(0, 0, 0, 0.7)',
        marginLeft: 5
    }
})