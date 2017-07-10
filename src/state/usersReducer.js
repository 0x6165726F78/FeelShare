import ActionTypes from './actionTypes';
const initialState = {
  loading: false,
};

class usersReducer {
  static reduce(state = initialState, action) {
    const nextCase = usersReducer[action.type];

    return nextCase ? nextCase(state, action) : state;
  }

  static [ActionTypes.LOAD_USERS](state, action) {
    return {
      ...state,
      loading: true,
    };
  }

  static [ActionTypes.LOAD_USERS_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      ...action.users,
    };
  }

  static [ActionTypes.LOAD_USER_SUCCESS](state, action) {
    return {
      ...state,
      [action.user.uid]: action.user,
    };
  }
}

export default usersReducer.reduce;
