import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChannelHeader from './channel_header';
import ChannelBody from './channel_body';
import ChannelFooter from './channel_footer';
import SendGif from '../modals/send_gif_container';

export default class ChannelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emojiCodes: [], emojiData: null };
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.createSubscriptionAndFocus = this.createSubscriptionAndFocus.bind(this);
  }

  createSubscriptionAndFocus() {
    const { match, receiveMessage } = this.props;

    this.subscription = App.cable.subscriptions.create(
      {channel: 'ChatroomChannel', id: match.params.chatroomId},
      {received: (message) => receiveMessage(message)}
    );
    document.getElementById('message-input').focus();
  }

  componentDidMount() {
    const { fetchChatroom, match } = this.props;
    fetchChatroom(match.params.chatroomId);
    this.createSubscriptionAndFocus();
  }

  componentWillReceiveProps(nextProps) {
    const { activeView, receiveMessage, match } = this.props;

    if (activeView && (activeView.id !== Number(nextProps.match.params.chatroomId))) {
      this.subscription.unsubscribe();
      this.createSubscriptionAndFocus();
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
    return (e, emoji) => {
      const special = `:${emoji.name}:`;
      this.setState({
        emojiCodes: this.state.emojiCodes.concat([e]),
        emojiData: special
      });
    };
  }

  render() {
    const {
      activeView, selfDM, currentMessages,
      currentUsers, availableGif, match,
      currentUser, createMessage, openModal,
      receiveGifQuery, fetchGif, openEmojis,
      closeEmojis, emojiMenuStatus
    } = this.props;

    if (activeView) {
      return (
        <div className='channel-view'>
          <ChannelHeader
            channel={activeView}
            selfDM={selfDM}/>
          <ChannelBody
            channel={activeView}
            messages={currentMessages}
            currentUsers={currentUsers}
            availableGif={availableGif}/>
          <div className={this.handleEmojiClass()}>
              <EmojiPicker onEmojiClick={this.handleEmojiClick()}/>
          </div>
          <ChannelFooter
            channel={activeView}
            selfDM={selfDM}
            match={match}
            currentUser={currentUser}
            createMessage={createMessage}
            openModal={openModal}
            receiveGifQuery={receiveGifQuery}
            fetchGif={fetchGif}
            openEmojis={openEmojis}
            closeEmojis={closeEmojis}
            emojiMenuStatus={emojiMenuStatus}
            currentEmoji={this.state.emojiData}
            emojiCodes={this.state.emojiCodes} />
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
