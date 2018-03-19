import api from '../api/note';

export const CREATE_NOTE_START = 'CREATE_NOTE_START';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_ERROR = 'CREATE_NOTE_ERROR';

function createNoteStart() {
  return {
    type: CREATE_NOTE_START,
  }
}

function createNoteSuccess(data) {
  return {
    type: CREATE_NOTE_SUCCESS,
    data,
  }
}

function createNoteError(error) {
  return {
    type: CREATE_NOTE_ERROR,
    error,
  }
}

export function createNote(noteData) {
  return function (dispatch) {
    dispatch(createNoteStart());
    api.createNote(noteData)
      .then(data => dispatch(createNoteSuccess(data)))
      .catch(error => dispatch(createNoteError(error)))
  }
}