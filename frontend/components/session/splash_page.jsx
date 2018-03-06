import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav_bar';

const SplashPage = (props) => (
  <div className='splash-page'>
    <NavBar />
    <div className='splash-main'>
      <div className='splash-photo'>
        <img height='450' width='450' src='https://thegraphicsfairy.com/wp-content/uploads/blogger/_CarNcodpCMA/TQjf9_57QwI/AAAAAAAAKH8/Cd6QpiCk8mQ/s1600/penguin-clipart-graphicsfairy007b.jpg' />
      </div>
      <div className='splash-main text'>
        <h2 className='splash-main header'>Where Stuff Happens</h2>
        <p className='splash-main p'>
          Almost heaven, West Virginia Blue ridge mountains, Shenandoah river Life is old there, older than the trees
          Younger than the mountains, blowing like a breeze Country roads, take me home To the place I belong West Virginia
          Mountain mamma, take me home Country roads All my memories, gather round her Modest lady, stranger to blue water
          Dark and dusty, painted on the sky Misty taste of moonshine, teardrop in my eye
        </p>
          <button
            onClick={() => props.history.push('/signup')}
            className='splash-main signup'>GET STARTED</button>
        <div className='splash-main login'>
          <span>Have an account? <Link to='/login'>Log In</Link></span>
        </div>
      </div>
    </div>
  </div>
);

export default SplashPage;
