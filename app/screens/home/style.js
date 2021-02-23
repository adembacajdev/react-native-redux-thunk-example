import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: fonts.BOLD,
        color: 'black',
    },
    textsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    leftText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    link: {
        fontFamily: fonts.BOLD,
        fontSize: 12,
        color: '#F98B9C',
    }
})

export default styles;