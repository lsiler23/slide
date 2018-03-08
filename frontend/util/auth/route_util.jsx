import { Redirect, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { generalChatSelector } from '../../reducers/selectors';
import React from 'react';

const Auth = ({component: Component, path, loggedIn, exact, generalId}) => (
  <Route path={path} exact={exact} render={(props) => {
      return (!loggedIn ? <Component {...props} /> : <Redirect to={`/chatrooms/${generalId}`} />)
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
  const generalId = generalChatSelector(state);
  return {
    loggedIn: Boolean(state.session.currentUser),
    generalId
  };
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
