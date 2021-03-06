import { combineReducers } from 'redux';
import { modalReducer } from './modal_reducer';
import { searchReducer } from './search_reducer';
import gifViewReducer from './gif_view';
import emojiViewReducer from './emoji_view';

export default combineReducers({
  modal: modalReducer,
  search: searchReducer,
  gifView: gifViewReducer,
  emojiView: emojiViewReducer
});
