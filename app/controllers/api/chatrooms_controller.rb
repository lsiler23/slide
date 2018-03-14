class Api::ChatroomsController < ApplicationController

  before_action :require_login

  def index
    if params[:query].present?
      @channels = Chatroom.where('title ~ ?', params[:query])
    else
      @channels = Chatroom.all
    end
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    @messages = Message.find_by(chatroom_id: params[:id])

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

  def update
    chatroompart = Participation.find_by(chatroom_id: params[:id], participant_id: current_user.id)
    @chatroom = Chatroom.find(params[:id])

    if chatroompart && @chatroom.participant_ids.length === 1 && @chatroom.isDM
      chatroompart.destroy!
      render 'api/chatrooms/show.json.jbuilder'
      @chatroom.destroy!
    elsif chatroompart
      chatroompart.destroy!
      render 'api/chatrooms/show.json.jbuilder'
    else
      render json: { }
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:title, :isDM)
  end
end
