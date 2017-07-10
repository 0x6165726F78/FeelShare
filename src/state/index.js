import { createStore, applyMiddleware, combineReducers } from 'redux';
import { effectsMiddleware } from 'redux-effex';
import ActionTypes from './actionTypes';
import createLogger from 'redux-logger';
import appStateReducer from './appStateReducer';
import authStateReducer from './authStateReducer';
import usersReducer from './usersReducer';
import listenersReducer from './listenersReducer';
import selfieStateReducer from './selfieStateReducer';
import effects from '~/effects';

const appReducer = combineReducers({
  appState: appStateReducer,
  authState: authStateReducer,
  users: usersReducer,
  listeners: listenersReducer,
  selfieState: selfieStateReducer,
});

function rootReducer(state, action) {
  if (action.type === ActionTypes.LOG_OUT) {
    state = {
      appState: state.appState,
    };
  }

  return appReducer(state, action);
}

export default createStore(
  rootReducer,
  applyMiddleware(effectsMiddleware(effects), createLogger())
);
