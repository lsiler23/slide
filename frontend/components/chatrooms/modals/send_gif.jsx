import React from 'react';

export default class SendGif extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentGif: this.props.gif, hidden: true, gifClassName: 'gify-modal' };
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
      this.props.removeGif();
    };
  }

  render() {
    return (
      <div className={this.state.gifClassName}>
        <img className='actual-gif' src={this.state.currentGif} />
        <div className='gif-buttons'>
          <button
            onClick={this.handleSend()}
            className='send-button'>send</button>
          <button
            onClick={this.handleShuffle()}
            className='shuffle-button'>shuffle</button>
          <button
            onClick={() => this.props.removeGif()}
            className='cancel-button'>cancel</button>
        </div>
      </div>
    );
  }
}
