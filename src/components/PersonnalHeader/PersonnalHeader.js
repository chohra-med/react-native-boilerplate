import React from 'react';
import {Header} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import stylesHeader from './PersonnalHeaderStyle';
import theme from '../../theme';
import Icon from '../nativeIcon';

const {height} = Dimensions.get('window');

const textSize = height > 600 ? 32 : 25;

const PersonnalHeader = props => {
  const renderLeftComponents = () => {
    if (props.retour && props.retourTo) {
      return (
        <Icon
          name={'chevron-left'}
          color={theme.PRIMARY_COLOR_DARK}
          onPress={() => Actions[props.retourTo]()}
          size={textSize}
        />
      );
    }
    if (props.retour) {
      return (
        <Icon
          name={'chevron-left'}
          color={theme.PRIMARY_COLOR_DARK}
          onPress={() => Actions.pop()}
          size={textSize}
        />
      );
    }
  };
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: stylesHeader.centerComponent,
      }}
      centerContainerStyle={{flex: 6}}
      containerStyle={stylesHeader.containerStyle}
      leftComponent={renderLeftComponents()}
    />
  );
};

export default PersonnalHeader;
