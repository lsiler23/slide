import React from 'react';

export default class ChannelFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel, selfDM } = this.props;
    let title;
    if (channel.isDM && selfDM.id === channel.id) {
      title = 'Jot something down';
    } else if (channel.isDM) {
      const newTitle = channel.title.split(', ').slice(0, -1).join(', ');
      title = `Message ${newTitle}`;
    } else {
      title = `Message #${channel.title}`;
    }

    return (
      <div className='channel-footer'>
        <div className='chatbox'>
          <input
            type='text'
            placeholder={title}/>
        </div>
      </div>

    );
  }
}
