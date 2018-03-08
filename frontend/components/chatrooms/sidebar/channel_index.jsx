import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

export default class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channels } = this.props;
    return (
      <div className='side-bar channels'>
        {this.props.otherForm}
        <ul className='side-bar channel-index'>
          {
            channels.map((channel) => {
              return <ChannelIndexItem
                channel={channel}
                key={channel.id}
                fetchChannel={this.props.fetchChannel}
                history={this.props.history} />;
            })
          }
        </ul>
      </div>
    );

  }
}
