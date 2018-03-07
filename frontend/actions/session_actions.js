import * as SessionApiUtil from '../util/auth/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = ({ user, chatrooms}) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    chatrooms
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};


export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user)
    .then(payload => dispatch(receiveCurrentUser(payload)),
    (payload) => dispatch(receiveErrors(payload.responseJSON.errors)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout()
    .then(payload => dispatch(logoutCurrentUser()));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user)
    .then(payload => dispatch(receiveCurrentUser(payload)),
    (payload) => dispatch(receiveErrors(payload.responseJSON.errors)));
  };
};
