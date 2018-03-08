import { Map } from 'immutable';

import {
  GET_PEOPLE_START,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
} from 'actions/people';

const initialState = Map({
  loading: faslse,
  error: null,
  people: null,
  user: null,
});

const actionsMap = {
  // Async action
  [GET_PEOPLE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      people: null,
    }));
  },
  [GET_PEOPLE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_PEOPLE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      people: action.data,
      user: {
        tel: action.data,
        ...state.user,
      }
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
