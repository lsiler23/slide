import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import {
  clearSearch,
  fetchAllSearchedChannels,
  deleteParticipation } from '../../../actions/chatrooms_actions';
import { generalChatSelector } from '../../../reducers/selectors';
import ChannelIndex from './channel_index';

const msp = (state) => {
   
  return {
    generalChat: generalChatSelector(state)
  };
};

const mdp = (dispatch) => {
  return {
    openModal: (type) => dispatch(openModal(type)),
    searchChannels: (query) => dispatch(fetchAllSearchedChannels(query)),
    deleteParticipation: (id) => dispatch(deleteParticipation(id)),
    clearSearch: () => dispatch(clearSearch()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ChannelIndex);
