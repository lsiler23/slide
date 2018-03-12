import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import {
  RECEIVE_SEARCHED_USERS,
  RECEIVE_CHANNEL } from '../../actions/chatrooms_actions';
import { merge } from 'lodash';

const usersReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_SEARCHED_USERS:
      return action.users;
    case RECEIVE_CHANNEL:
      return merge({}, oldState, action.participants);
    default:
      return oldState;
  }
};

export default usersReducer;
