export const currentUserSelector = (state) => {
  return state.entities.users[state.session.currentUser];
};
