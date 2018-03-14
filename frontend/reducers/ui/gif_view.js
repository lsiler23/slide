import { RECEIVE_GIF, REMOVE_GIF } from '../../actions/chatrooms_actions';

const gifViewReducer = (oldState = null, action) => {

  switch (action.type) {
    case RECEIVE_GIF:
      return action.gif;
    case REMOVE_GIF:
      return null;
    default:
      return oldState;
  }

};

export default gifViewReducer;
