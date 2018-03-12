import React from 'react';
import ChannelFooter from './channel_footer';
import MessageItem from './message_item';

export default class  ChannelBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    return (
      <div className='channel-view channel-body'>
        <div>
          <ul>
            {
              messages.map((msg) => {
                return (
                  <li className='message'key={msg.id}>
                    <MessageItem message={msg} currentUsers={this.props.currentUsers}/>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
