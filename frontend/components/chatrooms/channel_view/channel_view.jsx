import React from 'react';
import ChannelHeader from './channel_header';
import { ChannelBody } from './channel_body';
import ChannelFooter from './channel_footer';

export default class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChatroom(this.props.match.params.chatroomId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeView && (this.props.activeView.id !== Number(nextProps.match.params.chatroomId))) {
      this.props.fetchChatroom(nextProps.match.params.chatroomId);
    }
  }

  render() {
    if (this.props.activeView) {
      return (
        <div className='channel-view'>
          <ChannelHeader channel={this.props.activeView}/>
          <ChannelBody channel={this.props.activeView}/>
          <ChannelFooter
            channel={this.props.activeView}
            selfDM={this.props.selfDM} />
        </div>
      );
    } else {
        return (
          <div>

          </div>
        );
    }
  }
}
