import React from 'react';
import dateFormat from 'dateformat'

export default class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message: { author_id, created_at, body }, currentUsers } = this.props;
    const msgAuthor = currentUsers[author_id];
    const newTime = dateFormat(created_at, 'shortTime');
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
