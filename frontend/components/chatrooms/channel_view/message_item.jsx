import React from 'react';
import dateFormat from 'dateformat';

export default class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message: { author_id, created_at, body }, currentUsers } = this.props;
    const msgAuthor = currentUsers[author_id];
    const day = dateFormat(created_at).slice(0, 11);
    const time = dateFormat(created_at, 'shortTime');
    const dateAndTime = `${day} - ${time}`;
    let realBody;

    if (body.slice(0, 13) === 'https://media') {
      realBody = <img width='300' height='auto' className='gif-img' src={body}/>;
    } else {
      realBody = body;
    }

    return (
      <div className='whole-message-item'>
        <div className='icon'>
          🔮
        </div>
        <div className='non-icon-things'>
          <div className='top-line'>
            <div className='msgauthor'>{ msgAuthor && msgAuthor.username}</div>
            <div className='msgtime'>{dateAndTime}</div>
          </div>
          <div className='msgbody'>
            {
              realBody
            }
          </div>
        </div>
      </div>
    );
  }
}
