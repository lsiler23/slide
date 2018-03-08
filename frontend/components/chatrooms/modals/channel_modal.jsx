import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannel from './create_channel_container';

function ChannelModal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  const component = <CreateChannel />;

  return (
    <div className="channel-modal-background" onClick={closeModal}>
      <div className="channel-modal-child" onClick={e => e.stopPropagation()}>
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
