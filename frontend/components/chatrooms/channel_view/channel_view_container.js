import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannel } from '../../../actions/chatrooms_actions';
import ChannelView from './channel_view';


const msp = (state, ownProps) => {
  return {
    activeView: state.entities.chatrooms[ownProps.match.params.chatroomId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};


export default withRouter(connect(msp, mdp)(ChannelView));
