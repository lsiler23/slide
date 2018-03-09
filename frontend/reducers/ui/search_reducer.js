import {
  RECEIVE_SEARCHED_CHANNELS,
  CLEAR_SEARCH } from '../../actions/chatrooms_actions';
import { merge } from 'lodash';

export const searchReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCHED_CHANNELS:
      return Object.keys(action.channels);
    case CLEAR_SEARCH:
      return [];
    default:
      return oldState;
  }
};
