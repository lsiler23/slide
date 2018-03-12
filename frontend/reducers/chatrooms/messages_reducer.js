import { merge } from 'lodash';
import { RECEIVE_CHANNEL, RECEIVE_MESSAGE } from '../../actions/chatrooms_actions';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, oldState, action.messages);
    case RECEIVE_MESSAGE:
      return merge({}, oldState, {[action.message.id]: action.message});
    default:
      return oldState;
  }
};

export default messagesReducer;
