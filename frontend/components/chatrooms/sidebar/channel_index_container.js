import React from 'react';
import { connect } from 'react-redux';
import { modalOpen, modalClose } from '../../../actions/modal_actions';
import { createChannel } from '../../../actions/chatrooms_actions';
import ChannelIndex from './channel_index';

const mdp = (dispatch) => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
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
