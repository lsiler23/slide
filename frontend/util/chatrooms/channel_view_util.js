export const fetchChannel = (id) => {
  return $.ajax({
    url: `/api/chatrooms/${id}`
  });
};
