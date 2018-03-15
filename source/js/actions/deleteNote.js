import api from '../api/note';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';

function deleteNoteStart() {
  return {
    type: DELETE_NOTE_START,
  }
}

function deleteNoteSuccess(data) {
  return {
    type: DELETE_NOTE_START,
    data
  }
}

function deleteNoteError(error) {
  return {
    type: DELETE_NOTE_ERROR,
    error,
  }
}

export function deleteNote(noteId) {
  return function (dispatch) {
    dispatch(deleteNoteStart());
    api.deleteNote(noteId)
      .then(data => dispatch(deleteNoteSuccess(data)))
      .catch(error => dispatch(deleteNoteError(error)));
  }
}
