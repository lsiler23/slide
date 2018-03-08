import { Redirect, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { generalChatSelector } from '../../reducers/selectors';
import React from 'react';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      return (!loggedIn ? <Component {...props} /> : <Redirect to='/chatrooms/1' />)
    }
    } />
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
);

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
