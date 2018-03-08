import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, RedirectToGeneralRoute } from '../util/auth/route_util';
import { generalChatSelector } from '../reducers/selectors';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPageContainer from './session/splash_page_container';
import WholePage from './chatrooms/whole_page';
import ChannelModal from './chatrooms/modals/channel_modal';

const App = () => (
  <div>
    <ChannelModal />
    <AuthRoute exact path='/' loggedIn={false} component={SplashPageContainer} />
    <AuthRoute path="/login" loggedIn={false} component={LoginFormContainer} />
    <AuthRoute path="/signup" loggedIn={false} component={SignupFormContainer} />
    <RedirectToGeneralRoute exact path="/chatrooms" />
    <ProtectedRoute path='/chatrooms/:chatroomId' component={WholePage} />
  </div>
);

export default App;
