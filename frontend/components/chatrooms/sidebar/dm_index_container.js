import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import {
  clearSearch,
  fetchAllSearchedUsers,
  deleteParticipation } from '../../../actions/chatrooms_actions';
import { selfDMSelector } from '../../../reducers/selectors';
import DMIndex from './dm_index';

const msp = (state) => {
  const currentUser = state.session.currentUser;
  const selfDMTitle = `${currentUser.username} (you)`;
  return {
    currentUser,
    selfDM: selfDMSelector(state, selfDMTitle)
  };
};

const mdp = (dispatch) => {
  return {
    openModal: (type) => dispatch(openModal(type)),
    searchUsers: (query) => dispatch(fetchAllSearchedUsers(query)),
    deleteParticipation: (id)=> dispatch(deleteParticipation(id)),
    clearSearch: () => dispatch(clearSearch()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(DMIndex);
