import React from 'react';

export default class DMIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleClick() {
    const { clearMessages, fetchChatroom, dm, history } = this.props;
    return (e) => {
      clearMessages();
      fetchChatroom(dm.id)
      .then(payload => this.setState(payload.channel))
      .then(() => history.push(`/chatrooms/${dm.id}`));
    };
  }

  handleRemoval(dm) {
    const { deleteParticipation, selfDM, history } = this.props;
    return (e) => {
      e.preventDefault();
      deleteParticipation(dm.id);
      history.push(`/chatrooms/${selfDM.id}`);
    };
  }

  render() {
    const { dm: { title } } = this.props;
    const { username } = this.props.currentUser;
    const titleCopy = title.slice(0).split(', ');
    const selfIndex = title.split(', ').indexOf(username);
    titleCopy.splice(selfIndex, 1);
    const finalTitle = (this.props.dm.id === this.props.selfDM.id ? title : titleCopy.join(', '));
    
    if (finalTitle === title) {
      return (
        <div className={this.props.classType}>
          <li
            className='dm-lis'
            onClick={this.handleClick()}
            role='button'
            tabIndex='0'>
            → {
              finalTitle
            }
          </li>
        </div>
      );
    } else {
      return (
        <div className={this.props.classType}>
          <li
            className='dm-lis'
            onClick={this.handleClick()}
            role='button'
            tabIndex='0'>
            → {
              finalTitle
            }
          </li>
          <div
            onClick={this.handleRemoval(this.props.dm)}
            className='channel-delete'
            role='button'
            tabIndex='0'>
            x
          </div>
        </div>
      );
    }

  }
}
