import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import _ from 'lodash';
import { Ionicons, SimpleLineIcons } from '@exponent/vector-icons';
import colors from '~/config/colors';
import Actions from '~/state/actions';
import { connect } from 'react-redux';
import { RegularText } from '~/components/StyledText';
import Exponent, { Components } from 'exponent';
import { LogoutBtn } from '~/components/HeaderBtn';

@connect(data => RankingScreen.getDataProps)
export default class RankingScreen extends Component {
  static getDataProps({ users: { loading, ...users }, authState }) {
    return {
      users: _.orderBy(users, ['points'], ['desc']),
      loading,
      uid: authState.uid,
    };
  }

  static navigationOptions = {
    title: 'Ranking',
    headerRight: <LogoutBtn />,
    tabBarLabel: 'Ranking',
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons
        name={`ios-trophy${focused ? '' : '-outline'}`}
        color={tintColor}
        size={28}
      />,
  };

  componentWillMount() {
    this.props.dispatch(Actions.loadUsers());
  }

  _showUserModal(user) {
    this.props.navigation.navigate('UserModal', { user });
  }

  _renderRow(user, position) {
    return (
      <View
        key={user.uid}
        style={[
          styles.row,
          user.uid === this.props.uid
            ? { backgroundColor: colors.hover }
            : null,
        ]}
      >
        <RegularText style={styles.position}>{`#${position}`}</RegularText>
        <TouchableOpacity
          onPress={() => this._showUserModal({ ...user, position })}
        >
          <Image style={styles.image} source={{ uri: user.avatarURL }} />
        </TouchableOpacity>
        <RegularText style={styles.name}>{`${user.name}`}</RegularText>
        <View style={{ flex: 1 }}>
          <RegularText style={styles.points}>{`${user.points} pt`}</RegularText>
        </View>
      </View>
    );
  }

  _renderActivityIndicator() {
    return (
      <ActivityIndicator
        key="activityIndicator"
        style={[StyleSheet.absoluteFill, { backgroundColor: 'white' }]}
        size="large"
      />
    );
  }

  render() {
    if (this.props.loading) {
      return this._renderActivityIndicator();
    }

    return (
      <ScrollView style={styles.container}>
        {this.props.users.map((user, i) => {
          return (
            <View key={i}>
              {this._renderRow(user, i + 1)}
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  position: {
    fontSize: 18,
    marginRight: 8,
  },
  image: {
    height: 38,
    width: 38,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 19,
    marginRight: 8,
  },
  name: {
    fontSize: 17,
  },
  points: {
    color: colors.letters,
    fontSize: 14,
    alignSelf: 'flex-end',
    paddingRight: 30,
  },
  logoutBtn: {
    marginRight: 12,
  },
});
