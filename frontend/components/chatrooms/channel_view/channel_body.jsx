import React from 'react';
import ChannelFooter from './channel_footer';
import MessageItem from './message_item';
import SendGif from '../modals/send_gif_container';

export default class  ChannelBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true, ulClassName: 'channel-message-list' };
  }

  toggleClass() {
    if (this.state.hidden === true) {
      this.setState({hidden: false, ulClassName: 'channel-message-list-special'});
    } else {
      this.setState({hidden: true, ulClassName: 'channel-message-list'});
    }
  }


  render() {
    const { messages } = this.props;

    if (this.props.availableGif) {
      return (
        <div className='channel-view channel-body'>
          <div>
            <ul className={this.state.ulClassName}>
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
            <SendGif />
          </div>
        </div>
      );
    } else {
      return (
        <div className='channel-view channel-body'>
          <div>
            <ul className='channel-message-list'>
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
}
