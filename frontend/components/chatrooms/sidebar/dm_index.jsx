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
      this.props.searchUsers('');
      this.props.openModal('dm');
    };
  }

  render() {
    const { dms } = this.props;

    return (
      <div className='side-bar dms'>
        <h4 onClick={this.handleClick()}>Direct Messages</h4>
        <ul className='side-bar dm-index'>
          {
            dms.map((dm) => {
                return <DMIndexItem
                  dm={dm}
                  key={dm.id}
                  fetchChatroom={this.props.fetchChatroom}
                  history={this.props.history}
                  match={this.props.match}
                  classType={this.handleSelection(dm.id)}
                  currentUser={this.props.currentUser}
                  selfDM={this.props.selfDM} />;
              })
            }
        </ul>
      </div>
    );

  }
}
