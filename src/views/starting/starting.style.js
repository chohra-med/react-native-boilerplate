import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: 100,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.25,
    // right: 0,
    // left: 0,
  },
  message: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 24,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.SECONDARY_COLOR,
    textAlign: 'center',
  },
  arMessage: {
    fontFamily: theme.ARABIC_FONT_FAMILY,
    fontSize: 20,
    fontWeight: theme.WEIGHT_LIGHT,
    color: theme.PRIMARY_COLOR,
    textAlign: 'center',
  },
});
