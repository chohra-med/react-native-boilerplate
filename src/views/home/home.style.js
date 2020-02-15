import React from 'react';
import styles from './home.style';
import {SafeAreaView, Image} from 'react-native';
import {LOGO} from '../../assets/icons';

export default class Component extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={LOGO} />
      </SafeAreaView>
    );
  }
}
