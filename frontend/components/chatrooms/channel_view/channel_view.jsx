import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import EmojiConvertor from 'emoji-js';
import ChannelHeader from './channel_header';
import ChannelBody from './channel_body';
import ChannelFooter from './channel_footer';
import SendGif from '../modals/send_gif_container';

export default class ChannelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emojiCode: '', emojiData: '' };
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchChatroom(this.props.match.params.chatroomId);
    this.subscription = App.cable.subscriptions.create(
      {channel: 'ChatroomChannel', id: this.props.match.params.chatroomId},
      {received: (message) => this.props.receiveMessage(message)}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeView && (this.props.activeView.id !== Number(nextProps.match.params.chatroomId))) {
      this.subscription.unsubscribe();
      this.props.fetchChatroom(nextProps.match.params.chatroomId);
      this.subscription = App.cable.subscriptions.create(
        {channel: 'ChatroomChannel', id: nextProps.match.params.chatroomId},
        {received: (message) => this.props.receiveMessage(message)}
      );
    }
  }

  handleEmojiClass() {
    if (this.props.emojiMenuStatus) {
      return 'emoji-menu hidden';
    } else {
      return 'emoji-menu';
    }
  }

  handleEmojiClick() {
    const jsemoji = new EmojiConvertor();
    return (e) => {
      const specialCode = `\\u{${e}}`;
      const emojicontent = jsemoji.replace_unified(specialCode);
      this.setState({ emojiCode: e, emojiData: emojicontent});
    };
  }

  render() {
    if (this.props.activeView) {
      return (
        <div className='channel-view'>
          <ChannelHeader
            channel={this.props.activeView}
            selfDM={this.props.selfDM}/>
          <ChannelBody
            channel={this.props.activeView}
            messages={this.props.currentMessages}
            currentUsers={this.props.currentUsers}
            availableGif={this.props.availableGif}/>
          <div className={this.handleEmojiClass()}>
              <EmojiPicker onEmojiClick={this.handleEmojiClick()}/>
          </div>
          <ChannelFooter
            channel={this.props.activeView}
            selfDM={this.props.selfDM}
            match={this.props.match}
            currentUser={this.props.currentUser}
            createMessage={this.props.createMessage}
            openModal={this.props.openModal}
            receiveGifQuery={this.props.receiveGifQuery}
            fetchGif={this.props.fetchGif}
            openEmojis={this.props.openEmojis}
            closeEmojis={this.props.closeEmojis}
            emojiMenuStatus={this.props.emojiMenuStatus}
            currentEmoji={this.state.emojiData} />
        </div>
      );
    } else {
        return (
          <div>

          </div>
        );
    }
  }
}
