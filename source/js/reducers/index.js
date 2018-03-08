import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './user';
import NoteReducer from './notes';


export default combineReducers({
  user: UserReducer,
  note: NoteReducer,
  form: formReducer
});