import * as ChannelViewUtil from '../util/chatrooms/channel_view_util';
import * as GiphyUtil from '../util/chatrooms/giphy_util';

export const RECEIVE_CHANNEL = 'FETCH_CHANNEL';
export const RECEIVE_SEARCHED_CHANNELS = 'RECEIVE_SEARCHED_CHANNELS';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const REMOVE_PARTICIPATION = 'REMOVE_PARTICIPATION';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_GIF = 'RECEIVE_GIF';
export const RECEIVE_GIF_QUERY = 'RECEIVE_GIF_QUERY';

export const receiveChannel = ({channel, participants, messages}) => {
  return {
    type: RECEIVE_CHANNEL,
    channel,
    participants,
    messages
  };
};

export const receiveSearchedChannels = (payload) => {
  return {
    type: RECEIVE_SEARCHED_CHANNELS,
    channels: payload
  };
};

export const receiveSearchedUsers = (payload) => {

  return {
    type: RECEIVE_SEARCHED_USERS,
    users: payload
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};

export const removeParticipation = (payload) => {
  return {
    type: REMOVE_PARTICIPATION,
    channel: payload
  };
};

export const receiveMessage = (payload) => {
  return {
    type: RECEIVE_MESSAGE,
    message: payload
  };
};

export const receiveGif = (payload) => {

  return {
    type: RECEIVE_GIF,
    gif: payload
  }
};

export const receiveGifQuery = (query, chatroomId) => {
  return {
    type: RECEIVE_GIF_QUERY,
    query,
    chatroomId
  };
};

export const fetchChatroom = (id) => {

  return (dispatch) => {
    return ChannelViewUtil.fetchChatroom(id)
    .then(payload => dispatch(receiveChannel(payload)));
  };
};

export const createChatroom = (channel) => {

  return (dispatch) => {
    return ChannelViewUtil.createChannel(channel)
    .then(payload => dispatch(receiveChannel(payload)));
  };
};

export const fetchAllSearchedChannels = (query) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchAllSearchedChannels(query)
    .then(payload => dispatch(receiveSearchedChannels(payload)));
  };
};

export const fetchAllSearchedUsers = (query) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchAllSearchedUsers(query)
    .then(payload => dispatch(receiveSearchedUsers(payload)));
  };
};

export const deleteParticipation = (id) => {
  return (dispatch) => {
    return ChannelViewUtil.deleteParticipation(id)
    .then(payload => dispatch(removeParticipation(payload)));
  };
};

export const createMessage = (message) => {
  return (dispatch) => {
    return ChannelViewUtil.createMessage(message);
  };
};

export const fetchGif = (query) => {

  return (dispatch) => {
    return GiphyUtil.fetchGif(query)
    .then(payload => dispatch(receiveGif(payload)));
  };
};
