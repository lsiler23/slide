import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

export default class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSelection = this.handleSelection.bind(this);
  }

  // handleSelection(id) {
  //   if (id === Number(this.props.match.params.id)) {
  //     return 'side-bar channel-index-item selected';
  //   } else {
  //     return 'side-bar channel-index-item';
  //   }
  // }

  render() {
    const { channels } = this.props;
    const upTop = Number(this.props.match.params.chatroomId);
    return (
      <div className='side-bar channels'>
        {this.props.otherForm}
        <ul className='side-bar channel-index'>
          {
            channels.slice(0, -1).map((channel) => {
              if (channel.id === upTop) {
                return <ChannelIndexItem
                  channel={channel}
                  key={channel.id}
                  fetchChannel={this.props.fetchChannel}
                  history={this.props.history}
                  match={this.props.match}
                  classType='side-bar channel-index-item selected' />;
              } else {
                return <ChannelIndexItem
                  channel={channel}
                  key={channel.id}
                  fetchChannel={this.props.fetchChannel}
                  history={this.props.history}
                  match={this.props.match}
                  classType='side-bar channel-index-item' />;
              }
            })
          }
        </ul>
      </div>
    );

  }
}
