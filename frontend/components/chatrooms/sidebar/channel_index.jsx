import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

export const ChannelIndex = (props) => {
  return (
    <ul className='side-bar channel-index'>
      {
        props.channels.map((channel) => {
          return <ChannelIndexItem
            channel={channel}
            key={channel.id}
            fetchChannel={props.fetchChannel}
            history={props.history}/>;
        })
      }
    </ul>
  );
};
