import React from 'react';

export default class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    const { channel } = this.props;
    const numOfParts = channel.participant_ids.length;
    if (channel) {
      return (
        <div className='channel-header'>
          <div className='channel-header title'># {channel.title}</div>
          <div className='channel-header num'>{numOfParts}</div>
        </div>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}
