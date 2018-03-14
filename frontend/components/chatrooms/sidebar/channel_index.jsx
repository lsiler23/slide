import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

export default class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelection(id) {
    if (id === Number(this.props.match.params.chatroomId)) {
      return 'chatroom-index-item-holder selected';
    } else {
      return 'chatroom-index-item-holder';
    }
  }

  handleClick() {
    return (e) => {
      this.props.clearSearch();
      this.props.searchChannels('');
      this.props.openModal('channel');
    };
  }

  render() {
    const {
      channels,
      fetchChatroom,
      history,
      match,
      currentUser,
      selfDM,
      clearMessages,
      generalChat,
      deleteParticipation } = this.props;

    return (
      <div className='side-bar channels'>
        <h4 onClick={this.handleClick()}>Channels</h4>
        <ul className='side-bar channel-index'>
          {
            channels.map((channel) => {
                return <ChannelIndexItem
                  channel={channel}
                  key={channel.id}
                  fetchChatroom={fetchChatroom}
                  history={history}
                  match={match}
                  classType={this.handleSelection(channel.id)}
                  deleteParticipation={deleteParticipation}
                  generalChat={generalChat}
                  clearMessages={clearMessages} />;
              })
            }
        </ul>
      </div>
    );

  }
}
