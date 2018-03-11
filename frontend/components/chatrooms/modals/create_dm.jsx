import React from 'react';

export default class CreateDM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', selected: [], goButton: 'create-channel go' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
    this.handleAlreadySelected = this.handleAlreadySelected.bind(this);
    // this.handleYouClick = this.handleYouClick.bind(this);
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
      this.setState({selected: this.state.selected.concat(newSelected), goButton: 'create-channel go ready'});
    };
  }

  // handleYouClick(user) {
  //   return (e) => {
  //     e.preventDefault();
  //     return console.log('some stuff');
  //   };
  // }

  handleChange(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({title: e.currentTarget.value}, () =>  {
      this.timeOut = setTimeout(() => this.props.searchUsers(this.state.title), 300);
    });
  }

  handleAlreadySelected(user) {
    return (e) => {
      e.preventDefault();
      const index = this.state.selected.indexOf(user);
      this.state.selected.splice(index, 1);
      this.setState({selected: this.state.selected });
    };
  }


  handleEscape() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
    };
  }


  render() {
    const { users, searchIds, currentUser } = this.props;
    return (
      <div className='create-channel'>
        <div className='escape' onClick={this.handleEscape()}>
           <div className='ex'>x</div>
          <div className='esc'>esc</div>
        </div>
        <div className='static-top'>
          <h2 className='create-channel header'>Direct Messages</h2>
          <div className='input-container'>
            <div className='bigolbox'>
              <div className='littleholder'>
                {
                  this.state.selected.map((sel) => {
                    return (
                      <span key={sel.id} className='selected-user' onClick={this.handleAlreadySelected(sel)}>
                        {`${sel.username}X`}
                      </span>
                    );
                  })
                }
              </div>
            <input
              type='text'
              className='channel-input'
              placeholder={this.state.input}
              onChange={this.handleChange}/>
          </div>
            <button
              className={this.state.goButton}
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
      </div>
    );
  }
}
