import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannel from './create_channel_container';
import CreateDM from './create_dm_container';
import SendGif from './send_gif_container';

function ChannelModal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  let className;

  if (modal === 'channel') {
    component = <CreateChannel />;
    className = 'channel-modal-background';
  } else if (modal === 'dm') {
    component = <CreateDM />;
    className = 'channel-modal-background';
  }

  return (
    <div className={className}>
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
