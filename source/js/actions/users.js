import api from 'api'

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

function getUserStart() {
  return {
    type: GET_USER_START,
  }
}

function getUserSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    data,
  }
}

function getUserError(error) {
  return {
    type: GET_USER_ERROR,
    error,
  }
}

export function getUser() {
  return function(dispatch) {
    dispatch(getUserStart());
    api.getUser()
      .then(data => dispatch(getUserSuccess(data)))
      .catch(error => dispatch(getUserError(error)))
  }
}