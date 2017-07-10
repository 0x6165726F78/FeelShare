import React, { PropTypes, Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '~/config/colors';
import { RegularText, BoldText } from '~/components/StyledText';
import Button from '~/components/Button';
import { EvilIcons } from '@exponent/vector-icons';
import Actions from '~/state/actions';

@connect(data => LoginScreen.getDataProps)
export default class LoginScreen extends Component {
  static getDataProps({ authState: { isAuthenticating } }) {
    return {
      isAuthenticating,
    };
  }

  _renderLogo() {
    return (
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    );
  }

  _renderAppDescription() {
    return (
      <RegularText style={styles.appDescription}>
        Smile, take photos, share and have fun. What are you waiting for ?
      </RegularText>
    );
  }

  _renderLoginButton() {
    return (
      <Button
        key="loginButton"
        onPress={() => this.props.dispatch(Actions.authStart())}
      >
        <EvilIcons name="sc-facebook" size={28} color={colors.secondary} />
        <BoldText style={styles.loginTxt}>Login With Facebook</BoldText>
      </Button>
    );
  }

  _renderActivityIndicator() {
    return (
      <ActivityIndicator
        key="activityIndicator"
        style={styles.activityIndicator}
        size="large"
      />
    );
  }

  _renderContent = () => {
    const component = !this.props.isAuthenticating
      ? [
          <View key="topContainer" style={styles.topContainer}>
            {this._renderLogo()}
            {this._renderAppDescription()}
          </View>,
          this._renderLoginButton(),
        ]
      : [
          <View key="topContainer" style={styles.topContainer}>
            {this._renderLogo()}
          </View>,
          this._renderActivityIndicator(),
        ];
    return component;
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderContent()}
        <StatusBar hidden />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  logo: {
    height: 180,
    width: 180,
    marginBottom: 40,
  },
  appDescription: {
    fontSize: 20,
    textAlign: 'center',
  },
  loginTxt: {
    fontSize: 16,
  },
  topContainer: {
    alignItems: 'center',
  },
  activityIndicator: {
    transform: [{ scale: 3 }],
    paddingBottom: 110,
  },
});
