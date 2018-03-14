import React from 'react';

export default class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel, selfDM } = this.props;
    const numOfParts = channel.participant_ids.length;
    let title;
    if (channel.isDM && selfDM.id !== channel.id) {
      const newTitle = channel.title.split(', ').slice(0, -1).join(', ');
      title = `${newTitle}`;
    } else {
      title = `# ${channel.title}`;
    }
    if (channel) {
      return (
        <div className='channel-header'>
          <div>
            <div className='channel-header title'>{title}</div>
            <div className='channel-header num'> 👤 {numOfParts}</div>
          </div>
            <div className='contact-icons'>
              <a href='https://github.com/lsiler23'>
                <div className='github-icon'>
                  <img
                    className='github-real'
                    width='20'
                    height='20'
                    src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
                    alt='github-link' />
                </div>
              </a>
            <a href='https://www.linkedin.com/in/laurette-siler-b4335569'>
              <div className='linkedin-icon'>
                <img
                  className='linkedin-real'
                  width='20'
                  height='20'
                  src='https://png.icons8.com/metro/1600/linkedin.png'
                  alt='linkedin-link' />
              </div>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}
