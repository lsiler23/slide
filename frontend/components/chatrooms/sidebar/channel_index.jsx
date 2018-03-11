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
      return 'side-bar chatroom-index-item-holder selected';
    } else {
      return 'side-bar chatroom-index-item-holder';
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
    const { channels } = this.props;
    return (
      <div className='side-bar channels'>
        <h4 onClick={this.handleClick()}>Channels</h4>
        <ul className='side-bar channel-index'>
          {
            channels.map((channel) => {
                return <ChannelIndexItem
                  channel={channel}
                  key={channel.id}
                  fetchChatroom={this.props.fetchChatroom}
                  history={this.props.history}
                  match={this.props.match}
                  classType={this.handleSelection(channel.id)}
                  deleteParticipation={this.props.deleteParticipation}
                  generalChat={this.props.generalChat} />;
              })
            }
        </ul>
      </div>
    );

  }
}
