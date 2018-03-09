class Api::ChatroomsController < ApplicationController

  before_action :require_login

  def index
    if params[:query].present?
      @channels = Chatroom.where('title ~ ?', params[:query])
    else
      @channels = Chatroom.where(creator_id: current_user.id)
    end
  end

  def show
    @chatroom = Chatroom.find(params[:id])

    if !@chatroom.participants.include?(current_user)
      Participation.create!({participant_id: current_user.id, chatroom_id: @chatroom.id})
    end
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
