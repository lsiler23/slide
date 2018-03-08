import React from 'react';

export default class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return (e) => {
      this.props.fetchChannel(this.props.channel.id)
      .then(payload => this.setState(payload.channel))
      .then(() => this.props.history.push(`/chatrooms/${this.props.channel.id}`));
    };
  }

  render() {
    return (
      <li
        className='side-bar channel-index-item'
        onClick={this.handleClick()}>
        → { this.props.channel.title }
      </li>
    );

  }
}
