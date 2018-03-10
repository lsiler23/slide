import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createChatroom,
  fetchChatroom,
  clearSearch } from '../../../actions/chatrooms_actions';
import { closeModal } from '../../../actions/modal_actions';
import createDM from './create_dm';

  const msp = (state) => {
    return {
      currentUser: state.session.currentUser,
      users: Object.values(state.entities.users),
      searchIds: Object.values(state.entities.users).map((user) => Number(user.id))
    };
  };

  const mdp = (dispatch) => {
    return {
      createDM: (channel) => dispatch(createChatroom(channel)),
      fetchChatroom: (id) => dispatch(fetchChatroom(id)),
      searchChannels: (query) => dispatch(fetchAllSearchedChannels(query)),
      closeModal: () => dispatch(closeModal())
    };
  };

export default withRouter(connect(msp, mdp)(createDM));
