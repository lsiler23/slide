import React from 'react';

export default class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel } = this.props;
    const numOfParts = channel.participant_ids.length;
    return (
      <div className='channel-header'>
        <div className='channel-header title'># {channel.title}</div>
        <div className='channel-header num'>{numOfParts}</div>
      </div>
    );
  }
}
