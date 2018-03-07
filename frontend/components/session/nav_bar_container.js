import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { signup } from '../../actions/session_actions';

const mdp = (dispatch) => {

  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default withRouter(connect(null, mdp)(NavBar));
