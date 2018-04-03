import fetchResource from './index';

function signUp(userData) {
  return fetchResource(`users`, { body: userData, method: 'POST' });
}
// due to the mock api - signin has GET method instead of POST
function signIn(userData) {
  return fetchResource(`users?email=${userData.email}&password=${userData.password}`, { method: 'GET' });
}

function getUser(userId) {
  return fetchResource(`users/${userId}`, { method: 'GET' });
}

export default {
  signIn,
  signUp,
  getUser,
}
