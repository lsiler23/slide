import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import {
  RECEIVE_CHANNEL,
  RECEIVE_SEARCHED_CHANNELS,
  REMOVE_PARTICIPATION,
  RECEIVE_MESSAGE} from '../../actions/chatrooms_actions';
import { merge } from 'lodash';

const chatroomsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, action.chatrooms);
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CHANNEL:
      return merge({}, oldState, {[action.channel.id]: action.channel});
    case RECEIVE_SEARCHED_CHANNELS:
      return merge({}, oldState, action.channels);
    case REMOVE_PARTICIPATION:
      delete newState[action.channel.channel.id];
      return newState;
    case RECEIVE_MESSAGE:
      newState[action.message.chatroom_id].message_ids.push(action.message.id);
      return newState;
    default:
      return oldState;
  }
};

export default chatroomsReducer;
