import Exponent, { Components } from 'exponent';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '~/state';
import Actions from '~/state/actions';
import Router from '~/navigation';
import { LoginScreen } from '~/screens';

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App {...this.props} />
      </Provider>
    );
  }
}

@connect(data => App.getDataProps)
class App extends Component {
  static getDataProps({ appState: { isReady }, authState: { isAuthed } }) {
    return {
      isReady,
      isAuthed,
    };
  }

  componentWillMount() {
    this.props.dispatch(Actions.appBootstrap());
  }

  _renderScreens() {
    return this.props.isAuthed ? <Router /> : <LoginScreen />;
  }

  render() {
    return this.props.isReady
      ? this._renderScreens()
      : <Components.AppLoading />;
  }
}

Exponent.registerRootComponent(AppContainer);
