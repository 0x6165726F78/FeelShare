import ActionTypes from './actionTypes';

class Actions {
  static appBootstrap() {
    return {
      type: ActionTypes.APP_BOOTSTRAP,
    };
  }

  static appBootstrapSuccess() {
    return {
      type: ActionTypes.APP_BOOTSTRAP_SUCCESS,
    };
  }

  static authStart() {
    return {
      type: ActionTypes.AUTH_START,
    };
  }

  static authSuccess(uid) {
    return {
      type: ActionTypes.AUTH_SUCCESS,
      uid,
    };
  }

  static authError(err) {
    return {
      type: ActionTypes.AUTH_ERROR,
      err,
    };
  }

  static loadUsers() {
    return {
      type: ActionTypes.LOAD_USERS,
    };
  }

  static loadUsersSuccess(users) {
    return {
      type: ActionTypes.LOAD_USERS_SUCCESS,
      users,
    };
  }

  static setListener(listener: string) {
    return {
      type: ActionTypes.SET_LISTENER,
      listener,
    };
  }

  static loadUserSuccess(user) {
    return {
      type: ActionTypes.LOAD_USER_SUCCESS,
      user,
    };
  }

  static notAuthed() {
    return {
      type: ActionTypes.NOT_AUTHED,
    };
  }

  static takeSelfie() {
    return {
      type: ActionTypes.TAKE_SELFIE,
    };
  }

  static takeSelfieSuccess({ image, points, message }) {
    return {
      type: ActionTypes.TAKE_SELFIE_SUCCESS,
      image,
      points,
      message,
    };
  }

  static takeSelfieError(err) {
    return {
      type: ActionTypes.TAKE_SELFIE_ERROR,
      err,
    };
  }

  static resetSelfieScreen(err) {
    return {
      type: ActionTypes.RESET_SELFIE_SCREEN,
      err,
    };
  }

  static logOut() {
    return {
      type: ActionTypes.LOG_OUT,
    };
  }
}

export default Actions;
