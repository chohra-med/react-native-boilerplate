import {StyleSheet, Platform, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');
const textSize = (height > 600) ? 30 : 24;


export default stylesHeader = StyleSheet.create({

    containerStyle: {
        backgroundColor: theme.WHITE,
        borderBottomColor: theme.GREY_WHITE,
        width,
        paddingVertical: 16,
        justifyContent: 'space-around',
        borderBottomWidth: textSize / 8,
    },
    centerComponent: {
        color: theme.DARK,
        fontSize: textSize / 1.2,
        fontWeight: 'bold',
    },
});
