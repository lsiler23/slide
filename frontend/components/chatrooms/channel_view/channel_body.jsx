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
    const { messages, availableGif, currentUsers } = this.props;
    let gifRender;

    if (availableGif) {
      gifRender = <SendGif />;
    } else {
      gifRender = <div></div>;
    }

    return (
      <div className='channel-view channel-body'>
        <div>
          <ul className={this.state.ulClassName}>
            {
              messages.map((msg) => {
                return (
                  <li className='message'key={msg.id}>
                    <MessageItem message={msg} currentUsers={currentUsers}/>
                  </li>
                );
              })
            }
          </ul>
          {
            gifRender
          }
        </div>
      </div>
    );
  }
}
