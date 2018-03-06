import { combineReducers } from 'redux';
import sessionReducer from './auth/session_reducer';
import errorsReducer from './auth/errors_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});
