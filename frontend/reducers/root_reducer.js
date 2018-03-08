import { combineReducers } from 'redux';
import sessionReducer from './auth/session_reducer';
import errorsReducer from './auth/errors_reducer';
import entitiesReducer from './chatrooms/entities_reducer';
import uiReducer from './ui/ui_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});
