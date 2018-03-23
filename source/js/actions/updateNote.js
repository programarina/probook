import api from '../api/note';

export const UPDATE_NOTE_START = 'UPDATE_NOTE_START';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_ERROR = 'UPDATE_NOTE_ERROR';

function updateNoteStart() {
  return {
    type: UPDATE_NOTE_START
  };
}

function updateNoteSuccess(data) {
  return {
    type: UPDATE_NOTE_SUCCESS,
    data,
  };
}

function updateNoteError(error) {
  return {
    type: UPDATE_NOTE_ERROR,
    error
  };
}

export function updateNote(note, noteId) {
  return function (dispatch) {
    updateNoteStart();
    api.updateNote(note, noteId)
      .then(date => dispatch(updateNoteSuccess(data)))
      .catch(error => dispatch(updateNoteError(error)));
  }
}
