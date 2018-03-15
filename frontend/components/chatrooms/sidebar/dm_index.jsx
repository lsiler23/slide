import React from 'react';
import DMIndexItem from './dm_index_item';
import { Link } from 'react-router-dom';

export default class DMIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelection(id) {
    if (id === Number(this.props.match.params.chatroomId)) {
      return 'side-bar chatroom-index-item selected';
    } else {
      return 'side-bar chatroom-index-item';
    }
  }

  handleClick() {
    return (e) => {
      this.props.clearSearch();
      this.props.searchUsers('')
      .then(() => this.props.searchChannels(''))
      .then(() => this.props.openModal('dm'));
    };
  }

  render() {
    const {
      dms,
      fetchChatroom,
      history,
      match,
      currentUser,
      selfDM,
      clearMessages,
      deleteParticipation } = this.props;

    return (
      <div className='side-bar dms'>
        <h4 onClick={this.handleClick()}>Direct Messages</h4>
        <ul className='side-bar dm-index'>
          {
            dms.map((dm) => {
                return <DMIndexItem
                  dm={dm}
                  key={dm.id}
                  fetchChatroom={fetchChatroom}
                  history={history}
                  match={match}
                  classType={this.handleSelection(dm.id)}
                  currentUser={currentUser}
                  selfDM={selfDM}
                  clearMessages={clearMessages}
                  deleteParticipation={deleteParticipation} />;
              })
            }
        </ul>
      </div>
    );

  }
}
