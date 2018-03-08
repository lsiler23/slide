import * as ChannelViewUtil from '../util/chatrooms/channel_view_util';

export const FETCH_CHANNEL = 'FETCH_CHANNEL';

export const receiveChannel = (channel) => {
  return {
    type: FETCH_CHANNEL,
    channel
  };
};

export const fetchChannel = (id) => {
  return (dispatch) => {
    return ChannelViewUtil.fetchChannel(id)
    .then(payload => dispatch(receiveChannel(payload)));
  };
};
