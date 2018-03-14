import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';
import { logout } from '../../../actions/session_actions';
import { merge } from 'lodash';
import { fetchChatroom, clearMessages } from '../../../actions/chatrooms_actions';
import {
  currentUserSelector,
  userChannelsSelector,
  userDMSelector } from '../../../reducers/selectors';

const msp = (state) => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    channels: userChannelsSelector(state, state.session.currentUser.id),
    dms: userDMSelector(state, state.session.currentUser.id)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchChatroom: (id) => dispatch(fetchChatroom(id)),
    clearMessages: () => dispatch(clearMessages())
  };
};

export default withRouter(connect(msp, mdp)(SideBar));
