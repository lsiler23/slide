import React from 'react';

export default class ChannelFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel } = this.props;
    const title = (channel.isDM ? `Message ${channel.title}` : `Message #${channel.title}`);

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
