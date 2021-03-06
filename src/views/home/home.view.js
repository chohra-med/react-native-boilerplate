import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';
import styles from './home.style';
import {LOGO} from '../../assets/icons';
import {strings} from '../../locales/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Component extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={LOGO} />
        <Text style={styles.message}>{strings('home.homeTest')}</Text>
        <Icon name="home" />
      </SafeAreaView>
    );
  }
}
