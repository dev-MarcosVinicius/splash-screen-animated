import React from 'react';
import LottieView from 'lottie-react-native';

const animation = require('../assets/96516-responsive-design.json');

export default class Splash extends React.PureComponent {
  render() {
    return (
      <LottieView
        source={animation}
        autoPlay
        loop
      />
    );
  }
}