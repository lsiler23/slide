import React from 'react';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout().then(() => this.props.history.push('/login'));
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>CHATROOM PAGE</h2>
          <h3>hello, {this.props.currentUser.username}</h3>
          <button onClick={this.handleLogout}>logout</button>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
