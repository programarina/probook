import axios from 'axios';

// export const GET_NOTE_DATA = 'GET_NOTE_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SIGN_IN = 'SIGN_IN';
export const SINGLE_NOTE_DATA = 'SINGLE_NOTE_DATA';


export function signUp(userData, callback, errorCallback) {
  const request = axios.post(url, userData)
    .then(response => callback(response))
    .catch(error => errorCallback(error));
  return {
    type: SET_USER_DATA,
    payload: request,
  }
}

export function signIn(userData, callback, errorCallback) {
  const request = axios.get('https://private-19561-probook.apiary-mock.com/users/1')
    .then(response => callback(response))
    .catch(error => errorCallback(error));
  // const request = axios.put(url, userData)
  //   .then(response => callback(response))
  //   .catch(error => errorCallback(error));

  return {
    type: SIGN_IN,
    payload: request,
  };
}

export function setNoteData(note) {
  return {
    type: GET_NOTE_DATA,
    payload: note
  }
}

export function fetchSingleNote(noteId, callback, errorCallback) {
  const request = axios.get(`${url}/${noteId}`)
    .then(response => callback(response))
    .catch(error => errorCallback(error));
  return {
    type: SINGLE_NOTE_DATA,
    payload: request
  }
}