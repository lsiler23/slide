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

  handleClick() {
    const { emojiMenuStatus, closeEmojis } = this.props;
    return (e) => {
      if (!emojiMenuStatus) {
        closeEmojis();
      }
    };
  }

  render() {
    const { messages, availableGif } = this.props;
    let renderGif;

    if (availableGif) {
      renderGif = <SendGif />;
    } else {
      renderGif = <div></div>;
    }

    return (
      <div
        className='channel-view channel-body'
        onClick={this.handleClick()}>
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
          {
            renderGif
          }
        </div>
      </div>
    );
  }
}
