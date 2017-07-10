import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';

export class RegularText extends PureComponent {
  render() {
    return (
      <Text {...this.props} style={[styles.regularText, this.props.style]} />
    );
  }
}

export class LightText extends PureComponent {
  render() {
    return (
      <Text {...this.props} style={[styles.lightText, this.props.style]} />
    );
  }
}

export class BoldText extends PureComponent {
  render() {
    return <Text {...this.props} style={[styles.boldText, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  regularText: {
    fontFamily: 'open-sans',
  },
  lightText: {
    fontFamily: 'open-sans-light',
  },
  boldText: {
    fontFamily: 'open-sans-bold',
  },
});
