class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save

      ChatroomChannel.broadcast_to(@message.chatroom, JSON.parse(render('/api/messages/_message.json.jbuilder', locals: { message: @message })))
      head :ok
    else
      render json: { errors: @message.errors.full_messages }, status: 422
    end
  end

  def index
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatroom_id)
  end
end
