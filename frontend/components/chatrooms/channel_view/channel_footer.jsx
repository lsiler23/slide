import React from 'react';

export default class ChannelFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEnter() {
    const chatroomId = Number(this.props.match.params.chatroomId);
    const authorId = Number(this.props.currentUser.id);
    return (e) => {
      e.preventDefault();
      this.props.createMessage({
        body: this.state.body,
        chatroom_id: chatroomId,
        author_id: authorId
     });
     this.setState({body: ''});
    };
  }

  handleChange() {
    return (e) => {
      this.setState({body: e.currentTarget.value});
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
            placeholder={title}
            onChange={this.handleChange()}
            value={this.state.body}/>
        </form>
      </div>

    );
  }
}
