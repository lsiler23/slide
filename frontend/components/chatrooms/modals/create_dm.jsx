import React from 'react';
import DMUser from './create_dm_li';

export default class CreateDM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', selected: []};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      const allUsers = this.state.selected.map((sel) => sel.username).join(', ').concat(`, ${this.props.currentUser.username}`);
      this.props.createDM({title: allUsers, isDM: true})
      .then(payload => this.props.fetchChatroom(payload.channel.id))
      .then(payload => this.props.history.push(`/chatrooms/${payload.channel.id}`))
      .then(() => this.props.closeModal());
    };
  }

  handleLiClick(user) {
    return (e) => {
      e.preventDefault();
      const newSelected = [user];
      this.setState({selected: this.state.selected.concat(newSelected)});

    };
  }

  handleChange(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({title: e.currentTarget.value}, () =>  {
      this.timeOut = setTimeout(() => this.props.searchUsers(this.state.title), 300);
    });
  }


  handleEscape() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
    };
  }


  render() {
    const { users, searchIds, currentUser } = this.props;
    debugger
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
              placeholder={this.state.input}
              onChange={this.handleChange}/>
            <button
              className='create-channel go'
              onClick={this.handleClick()}>Go</button>
          </div>
        </div>
        <div className='search-dropdown'>
          <h4>Conversations</h4>
          <div className='scrollbar'>
            <ul className='search-results'>
              {
                users && users.map((user) => {
                    if (searchIds.includes(user.id) && user.id !== currentUser.id && !this.state.selected.includes(user)) {
                      return (
                      <li key={user.id} onClick={this.handleLiClick(user)}>
                        {user.username}
                      </li>
                    );
                  } else if (!this.state.selected.includes(user)) {
                      return (
                      <li key={user.id}>
                        { `${user.username} (you)`}
                      </li>
                    );
                  }
                })
              }
            </ul>
          </div>
        </div>
        <div>
          {
            this.state.selected.map((sel) => {
              return sel.username;
            })
          }
        </div>
      </div>
    );
  }
}
