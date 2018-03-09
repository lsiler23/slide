import React from 'react';

export const ChannelFooter = (props) => {
  return (
    <div className='channel-footer'>
      <div className='chatbox'>
        <input
          type='text'
          placeholder={`Message #${props.channel.title}`}/>
      </div>
    </div>

  );
};
