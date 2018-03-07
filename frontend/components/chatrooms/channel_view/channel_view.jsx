import React from 'react';
import { ChannelHeader } from './channel_header';
import { ChannelBody } from './channel_body';

export default class ChannelView extends React.Component {

  render() {
    return (
      <div className='channel-view'>
        <ChannelHeader />
        <ChannelBody />
      </div>
    );
  }
}
