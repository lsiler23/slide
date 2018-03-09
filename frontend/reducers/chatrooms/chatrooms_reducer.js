import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import {
  RECEIVE_CHANNEL,
  RECEIVE_SEARCHED_CHANNELS } from '../../actions/chatrooms_actions';
import { merge } from 'lodash';

const chatroomsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, action.chatrooms);
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CHANNEL:
      return merge({}, oldState, {[action.channel.id]: action.channel});
    case RECEIVE_SEARCHED_CHANNELS:
      return merge({}, oldState, action.channels);
    default:
      return oldState;
  }
};

export default chatroomsReducer;
