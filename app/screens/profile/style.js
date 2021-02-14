import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 30
    },
    title: {
        fontFamily: fonts.BOLD,
        fontSize: 25,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 65
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.25)'
    },
    topRowRight: {
        flexDirection: 'column',
        marginLeft: 15,
    },
    name: {
        fontFamily: fonts.BOLD,
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    accountDescription: {
        fontFamily: fonts.LIGHT,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.4)'
    },
    itemCard: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    leftItemCard: {
        flex: 1,
        justifyContent: 'center'
    },
    rightItemCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    titleItem: {
        fontFamily: fonts.BOLD,
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    subtitleItem: {
        fontFamily: fonts.LIGHT,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.4)'
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 0.5,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.25)'
    },
    circleText: {
        fontFamily: fonts.REGULAR,
        fontSize: 35,
        color: 'rgba(0, 0, 0, 0.25)'
    },
})

export default styles;