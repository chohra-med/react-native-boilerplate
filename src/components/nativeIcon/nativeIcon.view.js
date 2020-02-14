import React from 'react';
import * as PropTypes from 'prop-types';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './nativeIcon.style';

class Component extends React.Component {
  render() {
    const {name, type, style, size, color, onPress} = this.props;
    return Platform.select({
      ios: (
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.container, style]}>
            <Icon name={name} type={type} size={size} color={color} />
          </View>
        </TouchableOpacity>
      ),
      android: (
        <TouchableNativeFeedback onPress={onPress}>
          <View style={[styles.container, style]}>
            <Icon name={name} size={size} type={type} color={color} />
          </View>
        </TouchableNativeFeedback>
      ),
    });
  }
}

Component.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Component.defaultProps = {
  size: 24,
  style: {},
  color: 'rgba(0,0,0,0.5)',
  type: 'material',
};

export default Component;
