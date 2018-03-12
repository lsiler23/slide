import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchChatroom,
  createMessage,
  receiveMessage } from '../../../actions/chatrooms_actions';
import {
  selfDMSelector,
  currentChatroomMessagesSelector } from '../../../reducers/selectors';
import ChannelView from './channel_view';


const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const selfDMTitle = `${currentUser.username} (you)`;
  const activeView = state.entities.chatrooms[ownProps.match.params.chatroomId];
  return {
    activeView,
    selfDM: selfDMSelector(state, selfDMTitle),
    currentUser,
    currentMessages: currentChatroomMessagesSelector(state, activeView.id)
  };
};

const mdp = (dispatch) => {
  return {
    fetchChatroom: (id) => dispatch(fetchChatroom(id)),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
  };
};


export default withRouter(connect(msp, mdp)(ChannelView));
