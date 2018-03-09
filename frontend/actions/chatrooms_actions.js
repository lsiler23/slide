import * as ChannelViewUtil from '../util/chatrooms/channel_view_util';

export const RECEIVE_CHANNEL = 'FETCH_CHANNEL';
export const RECEIVE_SEARCHED_CHANNELS = 'RECEIVE_SEARCHED_CHANNELS';
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

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}

export const fetchChannel = (id) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchChannel(id)
    .then(payload => dispatch(receiveChannel(payload)));
  };
};

export const fetchAllSearchedChannels = (query) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchAllSearchedChannels(query)
    .then(payload => dispatch(receiveSearchedChannels(payload)))
  };
};

export const createChannel = (channel) => {
  return (dispatch) => {
    return ChannelViewUtil.createChannel(channel)
    .then(payload => dispatch(receiveChannel(payload)))
  };
};
