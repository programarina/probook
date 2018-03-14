import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SignInReducer from './signin';
import SignUpReducer from './signup';
import NoteReducer from './note';

export default combineReducers({
  userSignIn: SignInReducer,
  userSignUp: SignUpReducer,
  form: formReducer,
  notes: NoteReducer,
});
