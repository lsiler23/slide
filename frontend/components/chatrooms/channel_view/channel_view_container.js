import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelView from './channel_view';

const msp = (state, ownProps) => {
  return {
    activeView: Number(ownProps.match.url.slice(-1))
  };
};


export default withRouter(connect(msp)(ChannelView));
