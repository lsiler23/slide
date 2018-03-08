import React from 'react';
import { ChannelHeader } from './channel_header';
import { ChannelBody } from './channel_body';

export default class ChannelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    if (this.state) {
      return (
        <div className='channel-view'>
          <ChannelHeader channel={this.state}/>
          <ChannelBody channel={this.state}/>
        </div>
      );
    } else {
      return (
        <div>loadinggg</div>
      );
    }
  }
}
