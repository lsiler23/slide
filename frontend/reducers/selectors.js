export const currentUserSelector = (state) => {
  return state.entities.users[state.session.currentUser];
};

export const generalChatSelector = (state) => {
  if (Object.values(state.entities.chatrooms)[0]) {
    return Object.values(state.entities.chatrooms).filter( (chatroom) => chatroom.title === 'general')[0].id;
  } else {
    return '';
  }
};
