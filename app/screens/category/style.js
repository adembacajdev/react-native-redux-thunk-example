import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    topRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    topLeftRow: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topRightRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rowTitle: {
        fontSize: 25,
        fontFamily: fonts.BOLD,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    flatlist: {
        flex: 1
    }
})

export default styles;