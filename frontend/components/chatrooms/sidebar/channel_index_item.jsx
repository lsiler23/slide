import React from 'react';

export const ChannelIndexItem = ({ channel }) => {
  return (
    <li className='side-bar channel-index-item'>
      → { channel.title }
    </li>
  )
};
