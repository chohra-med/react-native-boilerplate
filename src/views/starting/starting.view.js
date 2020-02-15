import React from 'react';
import styles from './starting.style';
import ROUTES from '../../navigation/routes';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {LOGO} from '../../assets/icons';
import {strings} from '../../locales/i18n';
export default class Component extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(ROUTES.HOME);
    }, 2500);
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Image resizeMode="contain" style={styles.logo} source={LOGO} />
          <View>
            <Text style={styles.message}>
              {strings('starting.welcome')}
            </Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
