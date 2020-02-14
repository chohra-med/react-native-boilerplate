import React from 'react';
import {Animated, SafeAreaView, Text} from 'react-native';
import {LOGO} from '../assets/images';
import {SPINNER} from '../assets/icons';

class LoadingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    Animated.sequence([
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.spinValue, {
        toValue: 0,
        delay: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => this.spin());
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.Image
            source={SPINNER}
          style={{
            width: 100,
            height: 100,
            transform: [{rotate: spin}],
          }}
        />

        <Text
          style={{
            marginTop: 30,
            fontSize: 20,
          }}>
          Loading…
        </Text>
      </SafeAreaView>
    );
  }
}

LoadingView.propTypes = {};

export default LoadingView;
