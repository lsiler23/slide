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

  handleRemoval(channel) {
    return (e) => {
      e.preventDefault();
      this.props.deleteParticipation(channel.id);
      this.props.history.push(`/chatrooms/${this.props.generalChat}`);
    };
  }


  render() {
    const isGeneral = (this.props.channel.id === this.props.generalChat);
    if (isGeneral) {
      return (
        <div className={this.props.classType}>
          <li
            className='channel-lis'
            onClick={this.handleClick()}
            role='button'
            tabindex='0'>
            { `#  ${this.props.channel.title}` }
          </li>
        </div>
      );
    } else {
      return (
        <div className={this.props.classType}>
          <li
            className='channel-lis'
            onClick={this.handleClick()}
            role='button'
            tabindex='0'>
            { `#  ${this.props.channel.title}` }
          </li>
          <div
            onClick={this.handleRemoval(this.props.channel)}
            className='channel-delete'
            role='button'
            tabindex='0'>
            x
          </div>
        </div>
      );
    }

  }
}
