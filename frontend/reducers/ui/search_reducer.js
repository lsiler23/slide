import {
  RECEIVE_SEARCHED_CHANNELS,
  RECEIVE_SEARCHED_USERS,
  CLEAR_SEARCH } from '../../actions/chatrooms_actions';
import { merge } from 'lodash';

export const searchReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCHED_CHANNELS:
      return Object.keys(action.channels);
    case RECEIVE_SEARCHED_USERS:
      return Object.keys(action.users);
    case CLEAR_SEARCH:
      return [];
    default:
      return oldState;
  }
};
