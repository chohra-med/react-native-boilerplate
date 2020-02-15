import React from 'react';
import styles from './home.style';
import {SafeAreaView, Image, Text} from 'react-native';
import {LOGO} from '../../assets/icons';
import {strings} from '../../locales/i18n';

export default class Component extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={LOGO} />
        <Text style={styles.message}>{strings('home.homeTest')}</Text>
      </SafeAreaView>
    );
  }
}
