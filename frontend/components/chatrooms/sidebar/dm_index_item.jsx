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
    const { dm: { title } } = this.props;
    const { username } = this.props.currentUser;
    const titleCopy = title.slice(0).split(', ');
    const selfIndex = title.split(', ').indexOf(username);
    titleCopy.splice(selfIndex, 1);
    const finalTitle = (this.props.dm.id === this.props.selfDM.id ? title : titleCopy.join(', '));
    return (
      <li
        onClick={this.handleClick()}
        className={this.props.classType}>
        → {
            finalTitle
          }
      </li>
    );

  }
}
