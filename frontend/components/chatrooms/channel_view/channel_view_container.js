import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchChatroom,
  createMessage,
  receiveMessage,
  receiveGifQuery,
  fetchGif,
  openEmojis,
  closeEmojis } from '../../../actions/chatrooms_actions';
import {
  selfDMSelector,
  currentChatroomMessagesSelector } from '../../../reducers/selectors';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ChannelView from './channel_view';


const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const selfDMTitle = `${currentUser.username} (you)`;
  const activeView = state.entities.chatrooms[ownProps.match.params.chatroomId];

  return {
    activeView,
    selfDM: selfDMSelector(state, selfDMTitle),
    currentUser,
    currentMessages: currentChatroomMessagesSelector(state, activeView.id),
    currentUsers: state.entities.users,
    availableGif: state.ui.gifView,
    emojiMenuStatus: state.ui.emojiView.hidden
  };
};

const mdp = (dispatch) => {
  return {
    fetchChatroom: (id) => dispatch(fetchChatroom(id)),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    receiveGifQuery: (query, chatroomId) => dispatch(receiveGifQuery(query, chatroomId)),
    fetchGif: (query) => dispatch(fetchGif(query)),
    openEmojis: () => dispatch(openEmojis()),
    closeEmojis: () => dispatch(closeEmojis()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};


export default withRouter(connect(msp, mdp)(ChannelView));
