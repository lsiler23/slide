import React from 'react';

export default class DMIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    return (e) => {
      this.props.fetchChatroom(this.props.dm.id)
      .then(payload => this.setState(payload.channel))
      .then(() => this.props.history.push(`/chatrooms/${this.props.dm.id}`));
    };
  }


  render() {
    return (
      <li
        onClick={this.handleClick()}
        className={this.props.classType}>
        → { this.props.dm.title }
      </li>
    );

  }
}
