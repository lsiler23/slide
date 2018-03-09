import React from 'react';

export default class CreateChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', isDM: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.props.createChannel(this.state)
      .then(payload => this.props.fetchChannel(payload.channel.id))
      .then(payload => this.props.history.push(`/chatrooms/${payload.channel.id}`))
      .then(() => this.props.closeModal());
    };
  }

  handleLIClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.fetchChannel(id)
      .then(payload => this.props.history.push(`/chatrooms/${id}`))
      .then(() => this.props.closeModal());
    };
    //build participation
  }

  handleChange(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({title: e.currentTarget.value}, () =>  {
      this.timeOut = setTimeout(() => this.props.searchChannels(this.state.title), 300);
    });
  }


  render() {
    const { channels, searchIds } = this.props;
    return (
      <div className='create-channel'>
        <h2 className='create-channel header'>Browse Channels</h2>
        <input
          type='text'
          className='channel-input'
          onChange={this.handleChange}/>
        <button
          className='create-channel go'
          onClick={this.handleClick()}>Go</button>
        <ul className='search-results'>
          {
            channels && channels.map(channel => {
              if (searchIds.includes(channel.id)) {
                return <li onClick={this.handleLIClick(channel.id)} key={channel.id}>{channel.title}</li>;
              }
            })
          }
        </ul>
      </div>
    );
  }
}
