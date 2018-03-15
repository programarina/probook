import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  UserReducer  from './user';
import NoteReducer from './note';

export default combineReducers({
  user: UserReducer,
  notes: NoteReducer,
  form: formReducer,
});
