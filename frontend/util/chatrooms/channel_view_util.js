export const fetchChannel = (id) => {
  return $.ajax({
    url: `/api/chatrooms/${id}`
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    url: '/api/chatrooms',
    method: 'POST',
    data: { chatroom: channel }
  });
};
