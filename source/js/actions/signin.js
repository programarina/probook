import api from '../api/user';

export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

function signInStart() {
  return {
    type: SIGN_IN_START,
  }
}

function signInSuccess(data) {
  return {
    type: SIGN_IN_SUCCESS,
    data,
  }
}

function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    error,
  }
}

export function signIn(userData) {
  return function (dispatch) {
    dispatch(signInStart());
    api.signIn(userData)
      .then(data => dispatch(signInSuccess(data)))
      .catch(error => dispatch(signInError(error)))
  }
}
