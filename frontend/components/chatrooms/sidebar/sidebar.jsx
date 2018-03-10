import React from 'react';
import ChannelIndex from './channel_index_container';
import DMIndex from './dm_index_container';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      showDropdown: false
    };
  }

  handleLogout(e) {
    this.props.logout().then(() => this.props.history.push('/login'));
  }

  toggleDropdown(e) {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  render () {
    const { channels, dms } = this.props;
    debugger
    if (this.props.currentUser) {
      return (
        <div className='side-bar'>
          <div className='side-bar header' onClick={this.toggleDropdown.bind(this)}>
            <h3> Hello, {this.props.currentUser.username}! 🔮  </h3>
            <div className={this.state.showDropdown ? '' : 'hidden'}>
              <button
                className='logout-button'
                onClick={this.handleLogout}>logout</button>
            </div>
          </div>

          <ChannelIndex
            channels={channels}
            fetchChatroom={this.props.fetchChatroom}
            history={this.props.history}
            match={this.props.match}/>

          <DMIndex
            dms={dms}
            fetchChatroom={this.props.fetchChatroom}
            history={this.props.history}
            match={this.props.match}/>
        </div>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}
