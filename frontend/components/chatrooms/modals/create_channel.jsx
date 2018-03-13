import React from 'react';
const dateFormat = require('dateFormat');

export default class CreateChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', isDM: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.noMatchToggle = this.noMatchToggle.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleModalEscape = this.handleModalEscape.bind(this);
  }

  handleModalEscape() {
    return (e) => {
      if (e.keyCode === 27) {
        this.props.closeModal();
      }
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleModalEscape(), false);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.props.createChannel(this.state)
      .then(payload => this.props.fetchChatroom(payload.channel.id))
      .then(payload => this.props.history.push(`/chatrooms/${payload.channel.id}`))
      .then(() => this.props.closeModal());
    };
  }

  handleLIClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.fetchChatroom(id)
      .then(payload => this.props.history.push(`/chatrooms/${id}`))
      .then(() => this.props.closeModal());
    };
  }

  handleChange(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({title: e.currentTarget.value}, () =>  {
      this.timeOut = setTimeout(() => this.props.searchChannels(this.state.title), 300);
    });
  }

  noMatchToggle() {
    if (this.props.searchIds.length <= 1 && this.state.title.length >= 1) {
      return 'create-channel go ready';
    } else {
      return 'create-channel go';
    }
  }

  handleEscape() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
    };
  }



  render() {
    const { channels, searchIds } = this.props;
    return (
      <div className='create-channel'>
        <div className='escape' onClick={this.handleEscape()}>
           <div className='ex'>x</div>
          <div className='esc'>esc</div>
        </div>
        <div className='static-top'>
          <h2 className='create-channel header'>Browse channels</h2>
          <div className='input-container' placeholder='Find or start a channel'>
            <input
              type='text'
              className='channel-input-static'
              placeholder='Find or start a channel'
              onChange={this.handleChange}/>
            <button
              className={this.noMatchToggle()}
              onClick={this.handleClick()}>Go</button>
          </div>
        </div>
        <div className='search-dropdown'>
          <h4>Channels</h4>
          <div className='scrollbar'>
            <ul className='search-results'>
              {
                channels && channels.map(channel => {
                  if (searchIds.length < 1 && this.state.title.length >= 1 && channel.isDM === false) {
                    return '';
                  } else if ((searchIds.length < 1) && channel.isDM === false) {
                    return (
                      <li
                      onClick={this.handleLIClick(channel.id)}
                      key={channel.id}>
                      <div>
                        {`# ${channel.title}`}
                      </div>
                      <div>
                        Created on {dateFormat(channel.created_at.slice(0, 10), 'fullDate')}
                      </div>
                      <div>
                        {channel.participant_ids.length}
                      </div>
                    </li>
                  );
                  } else if (searchIds.includes(channel.id) && channel.isDM === false) {
                    return (
                      <li
                        onClick={this.handleLIClick(channel.id)}
                        key={channel.id}>
                        <div className='top-parent-channel-browse'>
                          <div className='channel-name-browse'>
                            {`# ${channel.title}`}
                          </div>
                          <div className='num-parts-browse'>
                            {` 👤   ${channel.participant_ids.length}`}
                          </div>
                        </div>
                        <div className='created-on-browse'>
                          Created on {dateFormat(channel.created_at.slice(0, 10), 'fullDate')}
                        </div>
                      </li>
                    );
                    }
                  })
                }
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
