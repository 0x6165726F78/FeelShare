import ActionTypes from './actionTypes';
const initialState = {
  uid: '',
  isAuthenticating: true,
  isAuthed: false,
  error: '',
};

class authStateReducer {
  static reduce(state = initialState, action) {
    const nextCase = authStateReducer[action.type];

    return nextCase ? nextCase(state, action) : state;
  }

  static [ActionTypes.AUTH_START](state, action) {
    return {
      ...state,
      isAuthenticating: true,
    };
  }

  static [ActionTypes.AUTH_SUCCESS](state, action) {
    return {
      ...state,
      isAuthenticating: false,
      isAuthed: true,
      uid: action.uid,
    };
  }

  static [ActionTypes.AUTH_ERROR](state, action) {
    return {
      ...state,
      isAuthenticating: false,
      err: action.err,
    };
  }

  static [ActionTypes.NOT_AUTHED](state, action) {
    return {
      ...state,
      isAuthenticating: false,
    };
  }

  static [ActionTypes.LOG_OUT](state, action) {
    return {
      ...initialState,
      isAuthenticating: false,
    };
  }
}

export default authStateReducer.reduce;
