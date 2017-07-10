export default defineActionConstans([
  'APP_BOOTSTRAP',
  'APP_BOOTSTRAP_SUCCESS',
  'AUTH_START',
  'AUTH_SUCCESS',
  'AUTH_ERROR',
  'LOAD_USERS',
  'LOAD_USERS_SUCCESS',
  'SET_LISTENER',
  'LOAD_USER_SUCCESS',
  'NOT_AUTHED',
  'TAKE_SELFIE',
  'TAKE_SELFIE_SUCCESS',
  'TAKE_SELFIE_ERROR',
  'RESET_SELFIE_SCREEN',
  'LOG_OUT',
]);

function defineActionConstans(actions) {
  return actions.reduce((actions, action) => {
    actions[action] = action;
    return actions;
  }, {});
}
