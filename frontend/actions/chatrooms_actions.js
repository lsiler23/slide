import * as ChannelViewUtil from '../util/chatrooms/channel_view_util';

export const RECEIVE_CHANNEL = 'FETCH_CHANNEL';

export const receiveChannel = ({channel, participants}) => {
  return {
    type: RECEIVE_CHANNEL,
    channel,
    participants
  };
};

export const fetchChannel = (id) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchChannel(id)
    .then(payload => dispatch(receiveChannel(payload)));
  };
};

export const createChannel = (channel) => {
  return (dispatch) => {
    return ChannelViewUtil.createChannel(channel)
    .then(payload => dispatch(receiveChannel(payload)))
  };
};
