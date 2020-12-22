import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: 'white'
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: fonts.BOLD,
        color: 'black',
        marginTop: 30
    }
})

export default styles;