import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push('/');
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
            className='session-nav right-right'>Guest Sign Up</button>
        </div>
      </nav>
    );
  }
}
