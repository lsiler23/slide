import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';
import { logout } from '../../../actions/session_actions';
import { merge } from 'lodash';
import { fetchChatroom } from '../../../actions/chatrooms_actions';
import {
  currentUserSelector,
  userChannelsSelector,
  userDMSelector } from '../../../reducers/selectors';

const msp = (state) => {
  const currentUser = currentUserSelector(state);
  return {
    currentUser,
    channels: userChannelsSelector(state, state.session.currentUser),
    dms: userDMSelector(state, state.session.currentUser)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchChatroom: (id) => dispatch(fetchChatroom(id))
  };
};

export default withRouter(connect(msp, mdp)(SideBar));
