import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGif, createMessage } from '../../../actions/chatrooms_actions';
import { closeModal } from '../../../actions/modal_actions';
import SendGif from './send_gif';

const msp = (state) => {
  const { gif, query, chatroomId } = state.entities.gifs;
  debugger
  return {
    currentUser: state.session.currentUser,
    gif: gif.data.image_url,
    chatroomId,
    query
  };
};

const mdp = (dispatch) => {
  return {
    fetchGif: (query) => dispatch(fetchGif(query)),
    createMessage: (message) => dispatch(createMessage(message)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(SendGif));
