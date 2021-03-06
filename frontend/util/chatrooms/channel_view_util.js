export const fetchChatroom = (id) => {
  return $.ajax({
    url: `/api/chatrooms/${id}`
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    url: "/api/chatrooms",
    method: "POST",
    data: { chatroom: channel }
  });
};

export const fetchAllSearchedChannels = (query) => {
  return $.ajax({
    url: "/api/chatrooms",
    dataType: "json",
    data: { query }
  });
};

export const fetchAllSearchedUsers = (query) => {
  return $.ajax({
    url: "/api/users",
    dataType: "json",
    data: { query }
  });
};

export const deleteParticipation = (id) => {
  return $.ajax({
    url: `/api/chatrooms/${id}`,
    method: "PATCH"
  });
};

export const createMessage = (message) => {
  return $.ajax({
    url: `/api/chatrooms/${message.chatroom_id}/messages`,
    method: 'POST',
    data: { message }
  });
};
