import React from 'react';

export default class SendGif extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentGif: this.props.gif };
    this.handleShuffle = this.handleShuffle.bind(this);
    this.closeModal = this.props.closeModal.bind(this);
  }

  handleShuffle() {
    return (e) => {
      e.preventDefault();
      this.props.fetchGif(this.props.query)
      .then((payload) => this.setState({currentGif: payload.gif.data.image_url}));
    };
  }

  handleSend() {
    const authorId = Number(this.props.currentUser.id);
    return (e) => {
      e.preventDefault();
      this.props.createMessage({
        body: this.state.currentGif,
        chatroom_id: this.props.chatroomId,
        author_id: authorId
      });
      this.closeModal();
    };
  }

  render() {
    return (
      <div className='gify-modal'>
        <img className='actual-gif' src={this.state.currentGif} />
        <button
          onClick={this.handleSend()}>send</button>
        <button
          onClick={this.handleShuffle()}>shuffle</button>
        <button
          onClick={() => this.closeModal()}>cancel</button>
      </div>
    );
  }
}
