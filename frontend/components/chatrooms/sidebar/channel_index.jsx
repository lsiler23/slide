import React from 'react';
import { ChannelIndexItem } from './channel_index_item';

export const ChannelIndex = ({ channels }) => {
  return (
    <ul className='side-bar channel-index'>
      {
        channels.map((channel) => {
          return <ChannelIndexItem channel={channel} key={channel.id}/>;
        })
      }
    </ul>
  );
};
