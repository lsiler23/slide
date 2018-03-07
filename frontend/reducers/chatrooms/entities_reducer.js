import usersReducer from './users_reducer';
import chatroomsReducer from './chatrooms_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  users: usersReducer,
  chatrooms: chatroomsReducer
});
