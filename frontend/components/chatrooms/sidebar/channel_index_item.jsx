import React from 'react';

export default class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { selected: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return (e) => {
      debugger
      this.props.fetchChannel(this.props.channel.id)
      .then(payload => this.setState(payload.channel))
      .then(() => this.props.history.push(`/chatrooms/${this.props.channel.id}`));
    };
  }

  handleSelection() {

  }

  render() {
    return (
      <li
        onClick={this.handleClick()}
        className={`side-bar channel-index-item`}>
        → { this.props.channel.title }
      </li>
    );

  }
}
