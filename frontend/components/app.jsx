import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPageContainer from './session/splash_page_container';
import ChatRoomContainer from './chatrooms/chatrooms_container';

const App = () => (
  <div>
    <AuthRoute exact path='/' loggedIn={false} component={SplashPageContainer} />
    <AuthRoute path="/login" loggedIn={false} component={LoginFormContainer} />
    <AuthRoute path="/signup" loggedIn={false} component={SignupFormContainer} />
    <ProtectedRoute path='/chatrooms' component={ChatRoomContainer} />
  </div>
);

export default App;
