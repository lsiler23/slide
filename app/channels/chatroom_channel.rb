class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    debugger
    chatroom = Chatroom.find(params[:id])
    stream_for chatroom
  end

end
