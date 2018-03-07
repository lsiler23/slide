import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';
import { logout } from '../../actions/session_actions';
import { currentUserSelector } from '../../reducers/selectors';

const msp = (state) => {
  return {
    currentUser: currentUserSelector(state)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(msp, mdp)(SideBar));
