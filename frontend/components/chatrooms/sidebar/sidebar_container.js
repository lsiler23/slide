import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';
import { logout } from '../../../actions/session_actions';
import { merge } from 'lodash';
import { fetchChannel } from '../../../actions/chatrooms_actions';
import { currentUserSelector, userChannelsSelector } from '../../../reducers/selectors';

const msp = (state) => {
  const currentUser = currentUserSelector(state);
  return {
    currentUser,
    channels: userChannelsSelector(state, currentUser.id)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};

export default withRouter(connect(msp, mdp)(SideBar));
