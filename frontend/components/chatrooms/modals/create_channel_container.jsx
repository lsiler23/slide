import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../../actions/chatrooms_actions';
import { fetchChannel } from '../../../actions/chatrooms_actions';
import { closeModal } from '../../../actions/modal_actions';
import CreateChannel from './create_channel';

  const msp = (state) => {
    return {
      currentUser: state.session.currentUser
    };
  };

  const mdp = (dispatch) => {
    return {
      createChannel: (channel) => dispatch(createChannel(channel)),
      fetchChannel: (id) => dispatch(fetchChannel(id)),
      closeModal: () => dispatch(closeModal())
    };
  };

export default withRouter(connect(msp, mdp)(CreateChannel));
