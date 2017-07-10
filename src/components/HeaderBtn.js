import React, { PureComponent, Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SimpleLineIcons, Ionicons } from '@exponent/vector-icons';
import Actions from '~/state/actions';
import colors from '~/config/colors';
import { logOut } from '~/api/auth';

@connect()
export class LogoutBtn extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={async () => {
          await logOut();
          this.props.dispatch(Actions.logOut());
        }}
      >
        <SimpleLineIcons size={24} name="logout" color={colors.secondary} />
      </TouchableOpacity>
    );
  }
}

@connect(data => TakeSelfieBtn.getDataProps)
export class TakeSelfieBtn extends PureComponent {
  static getDataProps({ selfieState: { isTaked } }) {
    return {
      isTaked,
    };
  }

  render() {
    if (!this.props.isTaked) return null;

    return (
      <TouchableOpacity
        style={styles.takeSelfieBtn}
        onPress={() => this.props.dispatch(Actions.resetSelfieScreen())}
      >
        {<Ionicons name={'ios-camera'} color={colors.secondary} size={32} />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  logoutBtn: {
    marginRight: 12,
  },
  takeSelfieBtn: {
    marginRight: 12,
  },
});
