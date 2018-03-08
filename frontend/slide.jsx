import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchChannel } from './actions/chatrooms_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const {user, chatrooms} = window.currentUser;
    const preloadedState = {
      session: {
        currentUser: user.id
      },
      entities: {
        chatrooms,
        users: {
          [user.id]: user
        }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchChannel = fetchChannel;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
