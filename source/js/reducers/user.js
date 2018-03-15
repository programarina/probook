import { Map } from 'immutable';

import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from 'actions/users';

import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from 'actions/signup';

import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from 'actions/signin';

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
  [SIGN_UP_START]: (state) => {
    return state.merge(Map({
      loading: true,
      user: null,
      error: null,
    }));
  },
  [SIGN_UP_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      user: action.data,
      error: null,
    }));
  },
  [SIGN_UP_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      user: null,
      error: action.error,
    }));
  },
  [SIGN_IN_START]: (state) => {
    return state.merge(Map({
      loading: true,
      user: null,
      error: null,
    }));
  },
  [SIGN_IN_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      user: action.data,
      error: null,
    }));
  },
  [SIGN_IN_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      user: null,
      error: action.error,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
