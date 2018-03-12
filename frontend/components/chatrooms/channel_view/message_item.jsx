import React from 'react';

export default class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message: { author_id, created_at, body }, currentUsers } = this.props;
    const msgAuthor = currentUsers[author_id];
    const newTime = created_at.slice(11).slice(0, 5);
    return (
      <div className='whole-message-item'>
        <div className='icon'>
          🔮
        </div>
        <div className='non-icon-things'>
          <div className='top-line'>
            <div className='msgauthor'>{ msgAuthor && msgAuthor.username}</div>
            <div className='msgtime'>{newTime}</div>
          </div>
          <div className='msgbody'>{body}</div>
        </div>
      </div>
    );
  }
}
