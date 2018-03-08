import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ChannelIndex from './channel_index';

const mdp = (dispatch) => {
  return {
    otherForm: (
      <h4
        onClick={() => dispatch(openModal('channel'))}>
        Channels
      </h4>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(ChannelIndex);
