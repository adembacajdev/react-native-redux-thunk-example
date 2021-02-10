import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FilledStar, UnfilledStar, Trash } from '../../assets/images';
import { fonts } from '../../constants';

export const MyCommentsList = (props) => {
    return (
        <FlatList
            style={{ flex: 1, padding: 10 }}
            showsVerticalScrollIndicator={false}
            data={myComments}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <View style={styles.topCard}>
                            <View style={styles.topFirstCard}>
                                <View style={styles.topFirstLeft}>
                                    <Text style={styles.title}>{item.shop_name} | {item.post_name}</Text>
                                </View>
                                <View style={styles.topFirstRight}>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </View>
                            <View style={styles.topSecondCard}>
                                {[1, 2, 3, 4, 5].map(rank => {
                                    if (rank <= item.rating) return <FilledStar />;
                                    else return <UnfilledStar />;
                                })}
                            </View>
                        </View>
                        <View style={styles.bottomCard}>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <TouchableOpacity style={styles.trashStyle}>
                            <Trash />
                        </TouchableOpacity>
                    </View>
                )
            }}
            keyExtractor={(item, index) => String(item?._id)}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '96%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.20,
        shadowRadius: 5,
        elevation: 6,
        marginTop: 30,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    topCard: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 15
    },
    bottomCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    topFirstCard: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },
    topFirstLeft: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topFirstRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    topSecondCard: {
        flexDirection: 'row'
    },
    title: {
        fontFamily: fonts.BOLD,
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    date: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.4)'
    },
    description: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    trashStyle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#CE7082',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -30 / 2,
        bottom: -30 / 2
    }
})




const myComments = [
    {
        _id: 1,
        shop_name: 'Zara',
        post_name: 'Fustan nuserie',
        date: 'February 5, 2021',
        description: "The dress was awesome, and the seller was also awesome and very helpful. The dress was awesome, and the seller was also awesome and very helpful. The dress was awesome, and the seller was also awesome and very helpful. The dress was awesome, and the seller was also awesome and very helpful.",
        rating: 4
    },
    {
        _id: 2,
        shop_name: 'Zara',
        post_name: 'Fustan nuserie',
        date: 'February 5, 2021',
        description: "The dress was awesome, and the seller was also awesome and very helpful. The dress was awesome, and the seller was also awesome and very helpful. The dress was awesome, and the seller was also awesome and very helpful. The dress was awesome, and the seller was also awesome and very helpful.",
        rating: 2
    }
]