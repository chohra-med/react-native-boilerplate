import React from 'react';
import styles from './starting.style';
import ROUTES from '../../navigation/routes';
import theme from '../../theme';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {LOGO} from '../../assets/icons';

export default class Component extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(ROUTES.FIRST);
    }, 2500);
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Image resizeMode="contain" style={styles.logo} source={LOGO} />
          <View>
            <Text style={styles.message}>
              Welcome to this React native boilerplace
            </Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
