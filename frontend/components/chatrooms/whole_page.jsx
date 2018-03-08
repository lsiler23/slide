import React from 'react';
import SideBarContainer from './sidebar/sidebar_container';
import ChannelViewContainer from './channel_view/channel_view_container';

export default class WholePage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='whole-page'>
        <SideBarContainer />
        <ChannelViewContainer />
      </div>
    );
  }
}
