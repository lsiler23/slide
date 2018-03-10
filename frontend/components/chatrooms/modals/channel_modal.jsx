import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannel from './create_channel_container';
import CreateDM from './create_dm_container';

function ChannelModal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;

  if (modal === 'channel') {
    component = <CreateChannel />;
  } else if (modal === 'dm') {
    component = <CreateDM />;
  }

  return (
    <div className="channel-modal-background">
      <div className="channel-modal-child">
        {
          component
        }
      </div>
    </div>
  );
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ChannelModal);
