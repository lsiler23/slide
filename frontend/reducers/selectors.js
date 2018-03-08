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
