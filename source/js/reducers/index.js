import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './user';
import NotesReducer from './notes';


export default combineReducers({
  user: UserReducer,
  notes: NotesReducer,
  form: formReducer
});