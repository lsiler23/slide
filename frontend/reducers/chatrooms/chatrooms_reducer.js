import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const chatroomsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, action.chatrooms);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default chatroomsReducer;
