import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { EvilIcons } from '@exponent/vector-icons';
import { BoldText, RegularText } from '~/components/StyledText';
import colors from '~/config/colors';

export default class UserModalScreen extends Component {
  static navigationOptions = ({ navigation: { state, goBack } }) => ({
    title: state.params.user.name,
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 8 }} onPress={() => goBack()}>
        <EvilIcons name="close" size={32} color="black" />
      </TouchableOpacity>
    ),
  });

  render() {
    const {
      avatarURL,
      position,
      points,
    } = this.props.navigation.state.params.user;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: avatarURL }} />
        <BoldText style={styles.position}>Position: </BoldText>
        <BoldText style={styles.positionNumber}>{`#${position}`}</BoldText>
        <BoldText style={styles.points}>Points: </BoldText>
        <BoldText style={styles.pointsNumber}>{`${points} pt`}</BoldText>
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
    paddingTop: 40,
  },
  image: {
    height: 160,
    width: 160,
    borderWidth: 3,
    borderColor: colors.secondary,
    borderRadius: 90,
    marginBottom: 60,
  },
  position: {
    fontSize: 28,
  },
  points: {
    fontSize: 28,
  },
  positionNumber: {
    color: colors.letters,
    fontSize: 22,
    marginBottom: 30,
  },
  pointsNumber: {
    color: colors.letters,
    fontSize: 22,
  },
});
