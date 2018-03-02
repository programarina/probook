import { combineReducers } from 'redux';

import UserReducer from './reducer_user';

// import app from 'reducers/app';
// import people from 'reducers/people';

// export default combineReducers({
//   app,
//   people,
// });

export default combineReducers({
  user: UserReducer,
});