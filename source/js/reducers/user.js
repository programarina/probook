import { Map } from 'immutable';

import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from 'actions/users';

const initialState = Map({
  user: null,
  error: null,
  loading: false,
});

const actionsMap = {
  [GET_USER_START]: (state) => {
    return state.merge(Map({
      loading: true,
      user: null,
      error: null,
    }));
  },
  [GET_USER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: null,
      user: action.data,
    }));
  },
  [GET_USER_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error,
      user: null,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
