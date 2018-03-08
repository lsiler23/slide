import React from 'react';

export default class CreateChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', isDM: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.props.createChannel(this.state)
      .then(payload => this.props.fetchChannel(payload.channel.id))
      .then(payload => this.props.history.push(`/chatrooms/${payload.channel.id}`))
      .then(() => this.props.closeModal());
    };
  }

  handleChange() {
    return (e) => {
      this.setState({title: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div className='create-channel'>
        <h2 className='create-channel header'>Browse Channels</h2>
        <input
          type='text'
          className='channel-input'
          onChange={this.handleChange()}/>
        <button
          className='create-channel go'
          onClick={this.handleClick()}>Go</button>
      </div>
    );
  }
}
