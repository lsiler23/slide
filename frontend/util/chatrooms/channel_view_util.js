export const fetchChannel = (id) => {
  return $.ajax({
    url: `/api/chatrooms/${id}`
  });
};

export const fetchAllChannels = () => {
  return $.ajax({
    url: '/api/chatrooms'
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    url: '/api/chatrooms',
    method: 'POST',
    data: { chatroom: channel }
  });
};
