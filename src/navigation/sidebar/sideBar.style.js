import {StyleSheet, Platform, Dimensions} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Platform.select({
      ios: 64,
      android: 0,
    }),
    minHeight: Dimensions.get('window').height - 32,
  },
  sectionList: {
    alignSelf: 'stretch',
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    marginBottom: 16,
  },
  user_name: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.SECONDARY_COLOR,
    fontSize: theme.SIZE_LARGE,
    fontWeight: theme.WEIGHT_MEDIUM,
    marginBottom: 32,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
  sectionContainer: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  itemContainerActif: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
  itemIcon: {
    marginLeft: 32,
    marginRight: 16,
    color: theme.PRIMARY_COLOR,
  },
  itemIconActif: {
    color: theme.WHITE,
  },
  itemText: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.SECONDARY_COLOR,
    fontSize: theme.SIZE_LARGE,
    fontWeight: theme.WEIGHT_LIGHT,
  },
  sectionTitle: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.DARK,
    fontSize: theme.SIZE_LARGE,
    fontWeight: theme.WEIGHT_LIGHT,
    marginLeft: 32,
  },
  itemTextActif: {
    color: theme.WHITE,
  },
});
