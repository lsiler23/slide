import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChatroom } from '../../../actions/chatrooms_actions';
import { selfDMSelector } from '../../../reducers/selectors';
import ChannelView from './channel_view';


const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const selfDMTitle = `${currentUser.username} (you)`;
  return {
    activeView: state.entities.chatrooms[ownProps.match.params.chatroomId],
    selfDM: selfDMSelector(state, selfDMTitle)
  };
};

const mdp = (dispatch) => {
  return {
    fetchChatroom: (id) => dispatch(fetchChatroom(id))
  };
};


export default withRouter(connect(msp, mdp)(ChannelView));
