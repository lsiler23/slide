import React from 'react';
import ChannelHeader from './channel_header';
import ChannelBody from './channel_body';
import ChannelFooter from './channel_footer';

export default class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChatroom(this.props.match.params.chatroomId);
    this.subscription = App.cable.subscriptions.create(
      {channel: 'ChatroomChannel', id: this.props.match.params.chatroomId},
      {received: (message) => this.props.receiveMessage(message)}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeView && (this.props.activeView.id !== Number(nextProps.match.params.chatroomId))) {
      this.subscription.unsubscribe();
      this.props.fetchChatroom(nextProps.match.params.chatroomId);
      this.subscription = App.cable.subscriptions.create(
        {channel: 'ChatroomChannel', id: nextProps.match.params.chatroomId},
        {received: (message) => this.props.receiveMessage(message)}
      );
    }
  }

  render() {
    if (this.props.activeView) {
      return (
        <div className='channel-view'>
          <ChannelHeader
            channel={this.props.activeView}
            selfDM={this.props.selfDM}/>
          <ChannelBody
            channel={this.props.activeView}
            messages={this.props.currentMessages}
            currentUsers={this.props.currentUsers}/>
          <ChannelFooter
            channel={this.props.activeView}
            selfDM={this.props.selfDM}
            match={this.props.match}
            currentUser={this.props.currentUser}
            createMessage={this.props.createMessage}
            openModal={this.props.openModal}
            receiveGifQuery={this.props.receiveGifQuery}
            fetchGif={this.props.fetchGif} />
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
