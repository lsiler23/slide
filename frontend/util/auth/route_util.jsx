import { Redirect, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      return (!loggedIn ? <Component {...props} /> : <Redirect to='/' />)
    }
    } />
);

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

export const AuthRoute = withRouter(connect(msp)(Auth));
