import React, { PropTypes, Component } from 'react';
import Exponent, { ImagePicker } from 'exponent';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@exponent/vector-icons';
import { connect } from 'react-redux';
import colors from '~/config/colors';
import { BoldText, RegularText } from '~/components/StyledText';
import Button from '~/components/Button';
import { TakeSelfieBtn } from '~/components/HeaderBtn';

import Actions from '~/state/actions';

@connect(data => SelfieScreen.getDataProps)
export default class SelfieScreen extends Component {
  static getDataProps({
    authState: { uid },
    selfieState: { loading, isTaked, image, err, points, message },
  }) {
    return {
      uid,
      loading,
      isTaked,
      image,
      err,
      points,
      message,
    };
  }

  static navigationOptions = {
    title: 'FeelShare',
    tabBarLabel: 'Selfie',
    headerRight: <TakeSelfieBtn />,
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons
        name={`ios-camera${focused ? '' : '-outline'}`}
        color={tintColor}
        size={28}
      />,
  };

  _renderTitle() {
    return <BoldText style={styles.title}>Get Ready!</BoldText>;
  }

  _renderIcon() {
    return (
      <Ionicons
        style={styles.imgIcn}
        name="ios-contact"
        size={160}
        color="#808080"
      />
    );
  }

  _renderDescriptionContainer() {
    return (
      <View style={styles.descriptionContainer}>
        <RegularText style={styles.text}>
          Take a pic where your face is clearly visible
        </RegularText>
        <RegularText style={styles.text}>Be sure to be illuminated</RegularText>
        <RegularText style={styles.text}>Make your best smile!</RegularText>
      </View>
    );
  }

  _renderBtn() {
    return (
      <Button
        key="btn"
        onPress={() => this.props.dispatch(Actions.takeSelfie())}
      >
        Take Selfie
      </Button>
    );
  }

  _renderContent = () => {
    const components = !this.props.isTaked
      ? [
          <View key="topContainer" style={styles.topContainer}>
            <BoldText style={styles.title}>Get Ready!</BoldText>
            <Ionicons
              style={styles.imgIcn}
              name="ios-contact"
              size={160}
              color="#808080"
            />
            {this._renderDescriptionContainer()}
          </View>,
          this._renderBtn(),
        ]
      : [
          <View key="topContainer" style={styles.topContainer}>
            <BoldText key="puntuation" style={styles.puntuation}>
              Your puntuation is: {this.props.points}
            </BoldText>
            <Image
              key="photo"
              style={styles.photo}
              source={{ uri: this.props.image }}
            />
            <BoldText key="phrase" style={styles.phrase}>
              {this.props.message}
            </BoldText>
          </View>,
        ];

    return components;
  };

  _renderPuntuation() {
    return (
      <BoldText key="puntuation" style={styles.puntuation}>
        Your puntuation is: {this.props.points}
      </BoldText>
    );
  }

  _renderPhoto() {
    return (
      <Image
        key="photo"
        style={styles.photo}
        source={{ uri: this.props.image }}
      />
    );
  }

  _renderPhrase() {
    return (
      <BoldText key="phrase" style={styles.phrase}>
        {this.props.message}
      </BoldText>
    );
  }

  _renderActivityIndicator() {
    return (
      <View style={styles.Container}>
        <ActivityIndicator
          size="large"
          style={{
            backgroundColor: 'transparent',
            marginTop: 200,
            transform: [{ scale: 3 }],
          }}
        />
      </View>
    );
  }

  render() {
    if (this.props.loading) return this._renderActivityIndicator();
    return (
      <View style={styles.Container}>
        {this.props.isTaked ? this._renderContent() : this._renderContent()}
        {this.props.err && alert(this.props.err)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  container: {},
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  imgIcn: {},
  puntuation: {
    color: colors.letters,
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  photo: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginBottom: 50,
  },
  phrase: {
    color: colors.letters,
    fontSize: 26,
    textAlign: 'center',
  },
  shareTxt: {
    fontSize: 16,
  },
});
