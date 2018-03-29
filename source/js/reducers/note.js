import { Map } from 'immutable';
import { routeCodes } from '../constants/routes';
import { redirectionService } from '../services/redirectionService';

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

import {
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_ERROR,
} from 'actions/updateNote';

const initialState = Map({
  loading: false,
  notes: [],
  error: null,
});

const actionsMap = {
  [GET_NOTES_START]: (state) => {
    return state.merge(Map({
      loading: true,
    }));
  },
  [GET_NOTES_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: action.data,
    }));
  },
  [GET_NOTES_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: [],
      error: action.error,
    }));
  },
  [CREATE_NOTE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      notes: state.get('notes'),
      error: null
    }));
  },
  [CREATE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: [...state.get('notes'), action.data],
      error: null
    }));
  },
  [CREATE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: null,
      error: action.error
    }));
  },
  [DELETE_NOTE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      notes: state.get('notes'),
      error: null
    }));
  },
  [DELETE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: state.get('notes').filter(note => note.id !== action.noteId),
      error: null
    }));
  },
  [DELETE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: null,
      error: action.error
    }));
  },
  [UPDATE_NOTE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      notes: state.get('notes'),
      error: null
    }));
  },
  [UPDATE_NOTE_SUCCESS]: (state, action) => {
    redirectionService.redirect(routeCodes.HOME);
    return state.merge(Map({
      loading: false,
      notes: state.get('notes'),
      error: null
    }));
  },
  [UPDATE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: null,
      error: action.error
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
