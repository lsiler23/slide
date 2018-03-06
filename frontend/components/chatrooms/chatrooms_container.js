import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatRoom from './chatroom';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser.username
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(msp, mdp)(ChatRoom));
