import api from '../api/note';

export const GET_SINGLE_NOTE_START = 'GET_SINGLE_NOTE_START';
export const GET_SINGLE_NOTE_SUCCESS = 'GET_SINGLE_NOTE_SUCCESS';
export const GET_SINGLE_NOTE_ERROR = 'GET_SINGLE_NOTE_ERROR';

function getSingleNoteStart() {
  return {
    type: GET_SINGLE_NOTE_START,
  }
}

function getSingleNoteSuccess(data) {
  return {
    type: GET_SINGLE_NOTE_SUCCESS,
    data,
  }
}

function getSingleNoteError(error) {
  return {
    type: GET_SINGLE_NOTE_ERROR,
    error,
  }
}

export function getSingleNote(noteId) {
  return function (dispatch) {
    dispatch(getSingleNoteStart());
    api.getSingleNote(noteId)
      .then(data => dispatch(getSingleNoteSuccess(data)))
      .catch(error => dispatch(getSingleNoteError(error)))
  }
}
