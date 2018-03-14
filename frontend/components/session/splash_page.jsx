import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from './nav_bar_container';

const SplashPage = (props) => (
  <div className='splash-page'>
    <NavBarContainer />
    <div className='splash-main'>
      <div className='splash-photo'>
        <img
          height='450'
          width='450'
          src='https://thegraphicsfairy.com/wp-content/uploads/blogger/_CarNcodpCMA/TQjf9_57QwI/AAAAAAAAKH8/Cd6QpiCk8mQ/s1600/penguin-clipart-graphicsfairy007b.jpg'
          alt='Bird sliding' />
      </div>
      <div className='splash-main text'>
        <h2 className='splash-main header'>Where Stuff Happens</h2>
        <p className='splash-main p'>
          When you just need to chat it out with a friend, Slide is here for you.
        </p>
          <button
            onClick={() => props.history.push('/signup')}
            className='splash-main signup'>GET STARTED</button>
        <div className='splash-main login'>
          <span>Have an account? <Link to='/login'>Log in</Link></span>
        </div>
      </div>
    </div>
  </div>
);

export default SplashPage;
