import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchChatroom } from './actions/chatrooms_actions';
import { deleteParticipation } from './actions/chatrooms_actions';
import { fetchGif } from './util/chatrooms/giphy_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const {user, chatrooms} = window.currentUser;
    const preloadedState = {
      session: {
        currentUser: user
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
  window.deleteParticipation = deleteParticipation;
  window.fetchGif = fetchGif;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
