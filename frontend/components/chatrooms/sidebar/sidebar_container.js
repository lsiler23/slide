import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';
import { logout } from '../../../actions/session_actions';
import { fetchChannel } from '../../../actions/chatrooms_actions';
import { currentUserSelector } from '../../../reducers/selectors';

const msp = (state) => {
  return {
    currentUser: currentUserSelector(state),
    channels: Object.values(state.entities.chatrooms)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};

export default withRouter(connect(msp, mdp)(SideBar));
