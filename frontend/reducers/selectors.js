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
  const allChannels = Object.values(state.entities.chatrooms);
  const userChannels = [];
  for (let i = 0; i < allChannels.length; i++) {
    if (allChannels[i].participant_ids.includes(id)) {
      userChannels.push(allChannels[i]);
    }
  }
  return userChannels;
};
