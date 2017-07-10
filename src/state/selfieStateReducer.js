import ActionTypes from './actionTypes';
const initialState = {
  loading: false,
  isTaked: false,
  image: '',
  err: null,
  points: null,
  message: '',
};

class selfieStateReducer {
  static reduce(state = initialState, action) {
    const nextCase = selfieStateReducer[action.type];

    return nextCase ? nextCase(state, action) : state;
  }

  static [ActionTypes.TAKE_SELFIE](state, action) {
    return {
      ...state,
      loading: true,
      err: null,
    };
  }

  static [ActionTypes.TAKE_SELFIE_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      isTaked: true,
      image: action.image,
      points: action.points,
      message: action.message,
      err: null,
    };
  }

  static [ActionTypes.TAKE_SELFIE_ERROR](state, action) {
    return {
      ...state,
      loading: false,
      isTaked: false,
      err: action.err,
    };
  }

  static [ActionTypes.RESET_SELFIE_SCREEN](state, action) {
    return {
      ...initialState,
      err: action.err,
    };
  }
}

export default selfieStateReducer.reduce;
