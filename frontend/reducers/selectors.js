export const currentUserSelector = (state) => {
  return state.entities.users[state.session.currentUser];
};

export const generalChatSelector = (state) => {
  const chatrooms = Object.values(state.entities.chatrooms);
  if (chatrooms[0]) {
    return chatrooms.filter((chatroom) => chatroom.title === 'general')[0].id;
  } else {
    return '';
  }
};

export const userChannelsSelector = (state, id) => {
  const allChatrooms = Object.values(state.entities.chatrooms);
  const userChannels = [];
  for (let i = 0; i < allChatrooms.length; i++) {
    if (allChatrooms[i].participant_ids.includes(id) && allChatrooms[i].isDM === false) {
      userChannels.push(allChatrooms[i]);
    }
  }
  return userChannels;
};

export const userDMSelector = (state, id) => {

  const allChatrooms = Object.values(state.entities.chatrooms);
  const userDMs = [];
  for (let i = 0; i < allChatrooms.length; i++) {
    if (allChatrooms[i].participant_ids.includes(id) && allChatrooms[i].isDM === true) {
      userDMs.push(allChatrooms[i]);
    }
  }
  return userDMs;
};


export const selfDMSelector = (state, title) => {
  const allChatrooms = Object.values(state.entities.chatrooms);

  for (let i = 0; i < allChatrooms.length; i++) {
    if (allChatrooms[i].title === title) {
      return allChatrooms[i];
    }
  }
};

export const currentChatroomMessagesSelector = (state, chatroomId) => {
  const allMessages = Object.values(state.entities.messages);
  const currentMessages = [];

  for (let i = 0; i < allMessages.length; i++) {
    if (allMessages[i].chatroom_id === chatroomId) {
      currentMessages.push(allMessages[i]);
    }
  }
  return currentMessages;
};
