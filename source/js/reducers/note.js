import { Map } from 'immutable';

import {
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_ERROR,
} from 'actions/note';

const initialState = Map({
  loading: false,
  notes: null,
  error: null,
});

const actionsMap = {
  [GET_NOTES_START]: (state) => {
    return state.merge(Map({
      loading: true,
      notes: null,
      error: null,
    }));
  },
  [GET_NOTES_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: action.data,
      error: null,
    }));
  },
  [GET_NOTES_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: null,
      error: action.error,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
