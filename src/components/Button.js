import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '~/config/colors';
import { BoldText } from '~/components/StyledText';

export default class Button extends PureComponent {
  render() {
    const children =
      typeof this.props.children === 'string'
        ? <BoldText style={styles.textBtn}>
            {this.props.children}
          </BoldText>
        : this.props.children;

    return (
      <TouchableOpacity style={styles.button} {...this.props}>
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 225,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.borders,
    flexDirection: 'row',
  },
  textBtn: {
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});
