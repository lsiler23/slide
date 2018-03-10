import React from 'react';

export default class CreateChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', isDM: true};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.noMatchToggle = this.noMatchToggle.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.props.createDM(this.state)
      .then(payload => this.props.fetchChatroom(payload.channel.id))
      .then(payload => this.props.history.push(`/chatrooms/${payload.channel.id}`))
      .then(() => this.props.closeModal());
    };
  }

  handleLIClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.createDM(id)
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
    const { users, searchIds } = this.props;
    return (
      <div className='create-channel'>
        <div className='escape' onClick={this.handleEscape()}>
           <div className='ex'>x</div>
          <div className='esc'>esc</div>
        </div>
        <div className='static-top'>
          <h2 className='create-channel header'>Direct Messages</h2>
          <div className='input-container'>
            <input
              type='text'
              className='channel-input'
              placeholder='Find or start a conversation'
              onChange={this.handleChange}/>
            <button
              className={this.noMatchToggle()}
              onClick={this.handleClick()}>Go</button>
          </div>
        </div>
        <div className='search-dropdown'>
          <h4>Conversations</h4>
          <div className='scrollbar'>
            <ul className='search-results'>
              {
                users && users.map(user => {
                  if (searchIds.includes(user.id)) {
                    return <li onClick={this.handleLIClick(user.id)} key={user.id}>{user.username}</li>;
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
