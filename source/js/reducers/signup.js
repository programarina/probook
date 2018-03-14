import { Map } from 'immutable';

import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from 'actions/signup';

const initialState = Map({
  loading: false,
  userSignUp: null,
  error: null,
});

const actionsMap = {
  [SIGN_UP_START]: (state) => {
    return state.merge(Map({
      loading: true,
      userSignUp: null,
      error: null,
    }));
  },
  [SIGN_UP_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      userSignUp: action.data,
      error: null,
    }));
  },
  [SIGN_UP_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      userSignUp: null,
      error: action.error,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
