import axios from 'axios';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_NOTE_DATA = 'GET_NOTE_DATA';
export const SIGN_IN = 'SIGN_IN';


export function signUp(userData) {
  return {
    type: GET_USER_DATA,
    payload: userData
  }
}

export function setNoteData(note) {
  return {
    type: GET_NOTE_DATA,
    payload: note
  }
}

export function signIn(userData, callback) {
  // const request = axios.put(url, userData)
  //   .then(()=>callback());

  return {
    type: SIGN_IN,
    // payload: request,
  };
}