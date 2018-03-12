import React from 'react';
import { ChannelFooter } from './channel_footer';

export default class  ChannelBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    return (
      <div className='channel-view channel-body'>
        <div>
          <ul>
            {
              messages.map((msg) => {
                return <li>{msg.body}</li>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
