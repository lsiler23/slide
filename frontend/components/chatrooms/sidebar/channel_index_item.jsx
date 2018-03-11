import React from 'react';

export default class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleClick() {
    return (e) => {
      this.props.fetchChatroom(this.props.channel.id)
      .then(payload => this.setState(payload.channel))
      .then(() => this.props.history.push(`/chatrooms/${this.props.channel.id}`));
    };
  }

  handleRemoval(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteParticipation(id);
      this.props.history.push(`/chatrooms/${this.props.generalChat}`);
    };
  }


  render() {
    const isGeneral = (this.props.channel.id === this.props.generalChat);
    if (isGeneral) {
      return (
        <div className={this.props.classType}>
          <li
            onClick={this.handleClick()}>
            → { this.props.channel.title }
          </li>
        </div>
      );
    } else {
      return (
        <div className={this.props.classType}>
          <li
            onClick={this.handleClick()}>
            → { this.props.channel.title }
          </li>
          <div
            onClick={this.handleRemoval(this.props.channel.id)}
            className='channel-delete'>
            x
          </div>
        </div>
      );
    }

  }
}
