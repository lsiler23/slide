import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createChatroom,
  fetchChatroom,
  fetchAllSearchedChannels,
  clearSearch } from '../../../actions/chatrooms_actions';
import { closeModal } from '../../../actions/modal_actions';
import CreateChannel from './create_channel';

  const msp = (state) => {
    return {
      currentUser: state.session.currentUser,
      channels: Object.values(state.entities.chatrooms),
      searchIds: state.ui.search.map((id) => Number(id))
    };
  };

  const mdp = (dispatch) => {
    return {
      createChannel: (channel) => dispatch(createChatroom(channel)),
      fetchChatroom: (id) => dispatch(fetchChatroom(id)),
      searchChannels: (query) => dispatch(fetchAllSearchedChannels(query)),
      closeModal: () => dispatch(closeModal())
    };
  };

export default withRouter(connect(msp, mdp)(CreateChannel));
