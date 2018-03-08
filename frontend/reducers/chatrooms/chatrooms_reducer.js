import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { FETCH_CHANNEL } from '../../actions/chatrooms_actions';
import { merge } from 'lodash';

const chatroomsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, action.chatrooms);
    case LOGOUT_CURRENT_USER:
      return {};
    case FETCH_CHANNEL:
      return merge({}, oldState, action.channel);
    default:
      return oldState;
  }
};

export default chatroomsReducer;
