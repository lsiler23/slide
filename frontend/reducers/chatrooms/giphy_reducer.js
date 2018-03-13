import { merge } from 'lodash';
import { RECEIVE_GIF, RECEIVE_GIF_QUERY } from '../../actions/chatrooms_actions';

const giphyReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GIF:
      return merge({}, oldState, { gif: action.gif });
    case RECEIVE_GIF_QUERY:
      return merge({}, oldState, { query: action.query, chatroomId: action.chatroomId });
    default:
      return oldState;
  }
};

export default giphyReducer;
