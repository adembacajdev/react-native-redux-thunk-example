import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    focusedSearch: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: "#F98B9C",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.55,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 999999,
    },
    unfocusedSearch: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    textinput: {
        marginLeft: 10,
        paddingVertical: 0,
        fontSize: 14,
        fontFamily: fonts.SEMIBOLD,
        color: 'rgba(0, 0, 0, 0.9)',
        width: '100%'
    },
    resultsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 20
    },
    resultsText: {
        fontSize: 12,
        fontFamily: fonts.LIGHT,
        color: '#625261'
    }
})

export default styles;