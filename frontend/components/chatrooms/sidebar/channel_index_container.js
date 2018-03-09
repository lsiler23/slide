import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { clearSearch } from '../../../actions/chatrooms_actions';
import ChannelIndex from './channel_index';


const mdp = (dispatch) => {
  return {
    openModal: (type) => dispatch(openModal(type)),
    clearSearch: () => dispatch(clearSearch()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(ChannelIndex);
