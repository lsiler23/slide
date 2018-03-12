import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { login } from '../../actions/session_actions';

const mdp = (dispatch) => {

  return {
    login: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(null, mdp)(NavBar));
