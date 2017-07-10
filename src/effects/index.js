import appBootstrapAsync from './appBootstrapAsync';
import authStartAsync from './authStartAsync';
import loadUsersAsync from './loadUsersAsync';
import takeSelfieAsync from './takeSelfieAsync';
import ActionTypes from '~/state/actionTypes';
const { APP_BOOTSTRAP, AUTH_START, LOAD_USERS, TAKE_SELFIE } = ActionTypes;

function genericErrorHandling({ action, error }) {
  return;
}

export default [
  {
    action: APP_BOOTSTRAP,
    effect: appBootstrapAsync,
    error: genericErrorHandling,
  },
  { action: AUTH_START, effect: authStartAsync, error: genericErrorHandling },
  { action: LOAD_USERS, effect: loadUsersAsync, error: genericErrorHandling },
  { action: TAKE_SELFIE, effect: takeSelfieAsync, error: genericErrorHandling },
];
