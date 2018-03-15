import fetchResource from './index';

function signUp(userData) {
  return fetchResource(`signup`, { body: userData, method: 'POST' });
}

function signIn(userData) {
  return fetchResource(`login`, { body: userData, method: 'POST' });
}

function getUser(userId) {
  return fetchResource(`users/${userId}`, { method: 'GET' });
}


export default {
  signIn,
  signUp,
  getUser,
}