import fetchResource from './index';

function signUp(userData) {
  return fetchResource(`users`, { body: userData, method: 'POST' });
}

function signIn(userData) {
  return fetchResource(`users`, { body: userData, method: 'PUT' });
}

function getUser(userId) {
  return fetchResource(`users/${userId}`, { method: 'GET' });
}


export default {
  signIn,
  signUp,
  getUser,
}