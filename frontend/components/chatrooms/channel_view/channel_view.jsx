import React from 'react';
import ChannelHeader from './channel_header';
import { ChannelBody } from './channel_body';
import { ChannelFooter } from './channel_footer';

export default class ChannelView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeView } = this.props;
    return (
      <div className='channel-view'>
        <ChannelHeader channel={activeView}/>
        <ChannelBody channel={activeView}/>
        <ChannelFooter channel={activeView} />
      </div>
    );
  }
}
