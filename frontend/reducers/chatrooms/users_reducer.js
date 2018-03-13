import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import {
  RECEIVE_SEARCHED_USERS,
  RECEIVE_CHANNEL,
  RECEIVE_MESSAGE } from '../../actions/chatrooms_actions';
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
    case RECEIVE_MESSAGE:
      return merge({}, oldState, {[action.message.author_id]: action.message.author});
    default:
      return oldState;
  }
};

export default usersReducer;
