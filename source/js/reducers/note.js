import { Map } from 'immutable';
import { routeCodes } from '../constants/routes';

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

import {
  GET_SINGLE_NOTE_START,
  GET_SINGLE_NOTE_SUCCESS,
  GET_SINGLE_NOTE_ERROR,
} from 'actions/getSingleNote';

import {
  RESET_NOTES
} from 'actions/resetAllNotes';


const initialState = Map({
  loading: false,
  notes: [],
  error: null,
  pageNum: 2,
  lastArray: false,
  currentNote: null,
  newNote:false,
});

const actionsMap = {
  [GET_NOTES_START]: (state) => {
    return state.merge(Map({
      loading: true,
    }));
  },
  [GET_NOTES_SUCCESS]: (state, action) => {
    let lastArray = false;
    if (action.data.length < 3) {
      lastArray = true;
    }
    return state.merge(Map({
      loading: false,
      notes: [...state.get('notes'), ...action.data],
      lastArray,
      pageNum: state.get('pageNum') + 1,
      newNote: false,
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
    }));
  },
  [CREATE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      newNote: true,
      notes:[],
      pageNum: 2,
      lastArray:false
    }));
  },
  [CREATE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      newNote: false,
      error: action.error
    }));
  },
  [DELETE_NOTE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      notes: state.get('notes'),
    }));
  },
  [DELETE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: state.get('notes').filter(note => note.id !== action.noteId),
    }));
  },
  [DELETE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: [],
      error: action.error
    }));
  },
  [UPDATE_NOTE_START]: (state) => {
    return state.merge(Map({
      loading: true,
    }));
  },
  [UPDATE_NOTE_SUCCESS]: (state, action) => {
    let notes = state.get('notes').map(note => {
      if (note.id !== action.data.id) {
        return note;
      }
      return {
        ...note,
        ...action.data
      }
    });

    return state.merge(Map({
      loading: false,
      notes,
    }));

  },
  [UPDATE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      notes: [],
      error: action.error
    }));
  },
  [GET_SINGLE_NOTE_START]: (state, action) => {
    return state.merge(Map({
      loading: true,
    }));
  },
  [GET_SINGLE_NOTE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      currentNote: action.data,
      }));
  },
  [GET_SINGLE_NOTE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      currentNote: null,
      error: action.error
    }));
  },
  [RESET_NOTES]: (state,action) => {
    return state.merge(Map({
      notes:[],
      pageNum: 2,
      lastArray:false
    }));
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
