import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topTitle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    titleText: {
        fontSize: 25,
        fontFamily: fonts.BOLD,
        color: 'rgba(0, 0, 0, 0.9)'
    }
})

export default styles;