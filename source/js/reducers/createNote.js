import { Map } from 'immutable';

import {
  CREATE_NOTE_START,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR,
} from 'actions/createNote';

const InitialState = Map({
  loader: false,
  note: null,
  error: null
});

const actionMap = {
  [CREATE_NOTE_START]: (state) => {
    return state.merge(Map({
      loader: true,
      note: null,
      error: null
    }));
  },
  [CREATE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loader: false,
      note: action.data,
      error: null
    }));
  },
  [CREATE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loader: false,
      note: null,
      error: action.error
    }));
  }
};

export default function reducer(state = InitialState, action = {}) {
  const fn = actionMap[action.type];
  return fn ? fn(state, action) : state;
};
