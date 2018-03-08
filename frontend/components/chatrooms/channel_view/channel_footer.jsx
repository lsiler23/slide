import React from 'react';

export const ChannelFooter = (props) => {
  return (
    <div className='channel-footer'>
      <input
        type='text'
        className='chatbox'
        placeholder={`Message #${props.channel.title}`}/>
    </div>

  );
};
