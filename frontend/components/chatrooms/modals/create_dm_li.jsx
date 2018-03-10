import React from 'react';

export default class DMUser extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { user, searchIds, currentUser } = this.props;

    if (searchIds.includes(user.id) && user.id !== currentUser) {
      return (
      <li key={user.id}>
        {user.username}
      </li>
    );
    } else {
      return (
      <li key={user.id}>
        { `${user.username} (you)`}
      </li>
    );
  }
  }

}
