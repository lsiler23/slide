export const currentUserSelector = (state) => {
  return state.entities.users[state.session.currentUser];
};

export const generalChatSelector = (state) => {
  return Object.values(state.entities.chatrooms)[0];
};
