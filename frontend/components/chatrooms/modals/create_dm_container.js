import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createChatroom,
  fetchChatroom,
  fetchAllSearchedUsers,
  clearSearch } from '../../../actions/chatrooms_actions';
// import { userDMSelector } from '../../../reducers/selectors';
import { closeModal } from '../../../actions/modal_actions';
import createDM from './create_dm';

  const msp = (state) => {
    const currentUser = state.session.currentUser;
    return {
      currentUser,
      users: Object.values(state.entities.users),
      searchIds: Object.values(state.entities.users).map((user) => Number(user.id))
    };
  };

  const mdp = (dispatch) => {
    return {
      createDM: (channel) => dispatch(createChatroom(channel)),
      fetchChatroom: (id) => dispatch(fetchChatroom(id)),
      searchUsers: (query) => dispatch(fetchAllSearchedUsers(query)),
      closeModal: () => dispatch(closeModal())
    };
  };

export default withRouter(connect(msp, mdp)(createDM));
