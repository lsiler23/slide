import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import {
  clearSearch,
  fetchAllSearchedUsers } from '../../../actions/chatrooms_actions';
import DMIndex from './dm_index';


const mdp = (dispatch) => {
  return {
    openModal: (type) => dispatch(openModal(type)),
    searchUsers: (query) => dispatch(fetchAllSearchedUsers(query)),
    clearSearch: () => dispatch(clearSearch()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(DMIndex);
