import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchChatroom } from './actions/chatrooms_actions';
import { fetchAllSearchedChannels } from './actions/chatrooms_actions';

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
    const preloadedState = {
      entities: {
        chatrooms: {
          [window.generalChat.channel.id]: window.generalChat.channel
        }
      }
    };

    store = configureStore(preloadedState);
  }
  window.store = store;
  window.fetchChatroom = fetchChatroom;
  window.fetchAllSearchedChannels = fetchAllSearchedChannels;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
