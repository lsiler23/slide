import * as ChannelViewUtil from '../util/chatrooms/channel_view_util';

export const RECEIVE_CHANNEL = 'FETCH_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';

export const receiveChannel = ({channel, participants}) => {
  return {
    type: RECEIVE_CHANNEL,
    channel,
    participants
  };
};

export const receiveAllChannels = (payload) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels: payload
  };
};

export const fetchChannel = (id) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchChannel(id)
    .then(payload => dispatch(receiveChannel(payload)));
  };
};

export const fetchAllChannels = () => {
  return (dispatch) => {
    return ChannelViewUtil.fetchAllChannels()
    .then(payload => dispatch(receiveAllChannels(payload)))
  };
};

export const createChannel = (channel) => {
  return (dispatch) => {
    return ChannelViewUtil.createChannel(channel)
    .then(payload => dispatch(receiveChannel(payload)))
  };
};
