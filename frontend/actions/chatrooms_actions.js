import * as ChannelViewUtil from '../util/chatrooms/channel_view_util';

export const RECEIVE_CHANNEL = 'FETCH_CHANNEL';
export const RECEIVE_SEARCHED_CHANNELS = 'RECEIVE_SEARCHED_CHANNELS';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveChannel = ({channel, participants}) => {

  return {
    type: RECEIVE_CHANNEL,
    channel,
    participants
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
  }
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
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
