import { Map } from 'immutable';

import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from 'actions/signin';

const initialState = Map({
  loading: false,
  userSignIn: null,
  error: null,
});

const actionsMap = {
  [SIGN_IN_START]: (state) => {
    return state.merge(Map({
      loading: true,
      userSignIn: null,
      error: null,
    }));
  },
  [SIGN_IN_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      userSignIn: action.data,
      error: null,
    }));
  },
  [SIGN_IN_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      userSignIn: null,
      error: action.error,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
