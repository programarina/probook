import { Map } from 'immutable';

import {
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_ERROR,
} from 'actions/getNotes';

import {
  CREATE_NOTE_START,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR,
} from 'actions/createNote';

import {
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_ERROR,
} from 'actions/deleteNote';


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
      notes: action.data.notes,
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
  [CREATE_NOTE_START]: (state) => {
    return state.merge(Map({
      loader: true,
      notes: null,
      error: null
    }));
  },
  [CREATE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loader: false,
      notes: action.data,
      error: null
    }));
  },
  [CREATE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loader: false,
      notes: null,
      error: action.error
    }));
  },
  [DELETE_NOTE_START]: (state) => {
    return state.merge(Map({
      loader: true,
      notes: null,
      error: null
    }));
  },
  [DELETE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loader: false,
      notes: action.data,
      error: null
    }));
  },
  [DELETE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loader: false,
      notes: null,
      error: action.error
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
