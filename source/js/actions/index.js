export const GET_USER_DATA = 'GET_USER_DATA';

export function setUserData(user) {
  return {
    type: GET_USER_DATA,
    payload: user
  }
} 