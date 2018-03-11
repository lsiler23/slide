import React from 'react';

export default class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel, selfDM } = this.props;
    const numOfParts = channel.participant_ids.length;
    let title;
    if (channel.isDM && selfDM.id !== channel.id) {
      const newTitle = channel.title.split(', ').slice(0, -1).join(', ');
      title = `${newTitle}`;
    } else {
      title = `${channel.title}`;
    }
    if (channel) {
      return (
        <div className='channel-header'>
          <div className='channel-header title'>{title}</div>
          <div className='channel-header num'> 👤 {numOfParts}</div>
        </div>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}
