class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    chatroom = Chatroom.find(params[:id])
    stream_for chatroom
  end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end
  #
  # def speak(data)
  #   # debugger
  #   Message.create!(
  #     body: data['message']['body'],
  #     chatroom_id: data['message']['chatroom_id'],
  #     author_id: data['message']['author_id']
  #   )
  #   ActionCable.server.broadcast 'chatroom_channel', message: data['message']['body']
  # end
end
