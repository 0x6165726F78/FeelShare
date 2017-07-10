import ActionTypes from './actionTypes';
const initialState = {
  isReady: false,
};

class appStateReducer {
  static reduce(state = initialState, action) {
    const nextCase = appStateReducer[action.type];

    return nextCase ? nextCase(state, action) : state;
  }

  static [ActionTypes.APP_BOOTSTRAP_SUCCESS](state, action) {
    return {
      isReady: true,
    };
  }
}

export default appStateReducer.reduce;
