import React from 'react';
const moment = require('moment');

export default class CreateDM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      selected: [],
      goButton: 'create-channel go',
      input: 'Find or start a conversation' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
    this.handleAlreadySelected = this.handleAlreadySelected.bind(this);
    this.handleYouClick = this.handleYouClick.bind(this);
    this.checkForUniqueness = this.checkForUniqueness.bind(this);
  }

  checkForUniqueness(title) {
    const { allDMs } = this.props;
    const sortedTitle = title.split(', ').sort().join(', ');

    for (let i = 0; i < allDMs.length; i++) {
      let currentTitle = allDMs[i].title.split(', ').sort().join(', ');
      if (currentTitle === sortedTitle) {
        return [false, allDMs[i]];
      }
    }
    return [true];
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      const allUsers = this.state.selected.map((sel) => sel.username).join(', ').concat(`, ${this.props.currentUser.username}`);
      const isUnique = this.checkForUniqueness(allUsers);
      if (isUnique[0]) {
        this.props.createDM({title: allUsers, isDM: true})
        .then(payload => this.props.fetchChatroom(payload.channel.id))
        .then(payload => this.props.history.push(`/chatrooms/${payload.channel.id}`))
        .then(() => this.props.closeModal());
      } else {
        this.props.history.push(`/chatrooms/${isUnique[1].id}`);
        this.props.closeModal();
      }
    };
  }

  handleLiClick(user) {
    return (e) => {
      e.preventDefault();
      const newSelected = [user];
      this.setState({selected: this.state.selected.concat(newSelected), goButton: 'create-channel go ready', input: ''});
    };
  }

  handleYouClick() {
    return (e) => {
      e.preventDefault();
      this.props.history.push(`/chatrooms/${this.props.selfDM.id}`);
      this.props.closeModal();
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
            <div className='bigolbox' placeholder='Find or start a conversation'>
              <div className='littleholder' placeholder='Find or start a conversation'>
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
                      <li
                        key={user.id}
                        onClick={this.handleLiClick(user)}
                        className='dm-item-holder'>
                      <div className='dm-browse-right-side'>
                        <div className='dm-browse-icon'>
                          💌
                        </div>
                        <div className='username-dm-browse'>
                          {user.username}
                        </div>
                      </div>
                        <div className='updated-at-dm-browse'>
                          {moment(user.updated_at).fromNow()}
                        </div>
                      </li>
                    );
                  } else if (!this.state.selected.includes(user) && this.state.selected.length < 1) {
                      return (
                      <li
                        key={user.id}
                        onClick={this.handleYouClick()}
                        className='dm-item-holder'>
                        <div className='dm-browse-right-side'>
                          <div className='dm-browse-icon'>
                            💌
                          </div>
                          <div className='username-dm-browse'>
                            { `${user.username} (you)`}
                          </div>
                        </div>
                        <div className='updated-at-dm-browse'>
                          {moment(user.updated_at).fromNow()}
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
