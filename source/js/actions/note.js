import api from 'api'

export const GET_NOTES_START = 'GET_NOTES_START';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';

function getNotesStart() {
  return {
    type: GET_NOTES_START,
  }
}

function getNotesSuccess(data) {
  return {
    type: GET_NOTES_SUCCESS,
    data,
  }
}

function getNotesError(error) {
  return {
    type: GET_NOTES_ERROR,
    error,
  }
}

export function getAllNotes() {
  return function (dispatch) {
    dispatch(getNotesStart());
    api.getAllNotes()
      .then(data => dispatch(getNotesSuccess(data)))
      .catch(error => dispatch(getNotesError(error)))
  }
}
