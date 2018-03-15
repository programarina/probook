import api from '../api/user';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

function signUpStart() {
  return {
    type: SIGN_UP_START,
  }
}

function signUpSuccess(data) {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  }
}

function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    error,
  }
}

export function signUp(userData) {
  return function (dispatch) {
    dispatch(signUpStart());
    api.signUp(userData)
      .then(data => dispatch(signUpSuccess(data)))
      .catch(error => dispatch(signUpError(error)))
  }
}
