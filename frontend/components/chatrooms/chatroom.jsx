import React from 'react';


export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout().then(() => this.props.history.push('/login'));
  }

  render () {
    return (
      <div>
        <h2>CHATROOM PAGE</h2>
        <h3>hello, {this.props.currentUser.username.slice(0, 8)}</h3>
        <button onClick={this.handleLogout}>logout</button>
      </div>
    );
  }
}
