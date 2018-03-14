import { OPEN_EMOJIS, CLOSE_EMOJIS } from '../../actions/chatrooms_actions';

const emojiViewReducer = (oldState = { hidden: true }, action) => {
  switch (action.type) {
    case OPEN_EMOJIS:
      return { hidden: false };
    case CLOSE_EMOJIS:
      return { hidden: true };
    default:
      return oldState;
  }
};

export default emojiViewReducer;
