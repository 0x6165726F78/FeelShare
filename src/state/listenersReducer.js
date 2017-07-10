import ActionTypes from './actionTypes';
const initialState = {
  feed: false,
};

class listenersReducer {
  static reduce(state = initialState, action) {
    const nextCase = listenersReducer[action.type];

    return nextCase ? nextCase(state, action) : state;
  }

  static setListener(state, action) {
    return {
      ...state,
      [action.listener]: true,
    };
  }
}

export default listenersReducer.reduce;
