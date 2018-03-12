import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: `TESTER@TEST.COM`,
      username: `guest`,
      password: 'password123'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push('/');
  }

  handleDemoClick(e) {
    this.props.login(this.state);
  }

  render() {
    return (
      <nav className='session-nav'>
        <div className='session-nav left'>
          <button
            onClick={this.handleClick}
            className='session-nav left-left'>🔮 slide</button>
        </div>
        <div className='session-nav right'>
          <button
            onClick={this.handleDemoClick}
            className='session-nav right-right'>Guest Log In</button>
        </div>
      </nav>
    );
  }
}
