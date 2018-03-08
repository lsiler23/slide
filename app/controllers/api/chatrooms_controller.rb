class Api::ChatroomsController < ApplicationController

  before_action :require_login

  def index
    @chatrooms = Chatroom.where(:isDM => false)
  end

  def show
    @chatroom = Chatroom.find(params[:id])
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    @chatroom.creator_id = current_user.id

    if @chatroom.save
      render :show
    else
      render json: {errors: @chatroom.errors.full_messages}, status: 422
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:title, :isDM)
  end
end
