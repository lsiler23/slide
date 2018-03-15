import React from 'react';
import EmojiConvertor from 'emoji-js';
import SendGif from '../modals/send_gif_container';

export default class ChannelFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', hidden: true };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { emojiCodes } = this.props;
    const { currentEmoji } = nextProps;

    if (currentEmoji && emojiCodes.length < nextProps.emojiCodes.length) {
      const jsemoji = new EmojiConvertor();
      const emojicontent = jsemoji.replace_colons(currentEmoji);
      const newBody = this.state.body + emojicontent;
      this.setState({body: newBody});
    }
  }

  handleEnter() {
    const {
      match, currentUser, receiveGifQuery,
      fetchGif, createMessage
    } = this.props;
    
    const chatroomId = Number(match.params.chatroomId);
    const authorId = Number(currentUser.id);
    const thisBody = this.state.body.slice(0, 7);
    const thisQuery = this.state.body.slice(7);

    return (e) => {
      e.preventDefault();
      if (thisBody === '/giphy ') {
        receiveGifQuery(thisQuery, chatroomId);
        fetchGif(thisQuery);
      } else {
        createMessage({
          body: this.state.body,
          chatroom_id: chatroomId,
          author_id: authorId
        });
        window.scrollTo(0, 760);
      }
      this.setState({body: ''});
    };
  }

  handleChange() {
    return (e) => {
      this.setState({body: e.currentTarget.value});
    };
  }

  handleEmojis() {
    const { emojiMenuStatus, openEmojis, closeEmojis } = this.props;
    return (e) => {
      e.preventDefault();
      if (emojiMenuStatus) {
        openEmojis();
      } else {
        closeEmojis();
      }
    };
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
        <form className='chatbox' onSubmit={this.handleEnter()}>
          <input
            type='text'
            id='message-input'
            placeholder={title}
            onChange={this.handleChange()}
            value={this.state.body}
            autoFocus/>
          <img
            className='emoji-trigger'
            src='https://cdn3.iconfinder.com/data/icons/emoji/100/Emoji_Sleep-512.png'
            onClick={this.handleEmojis()}>
          </img>
        </form>
      </div>
    );

  }
}
