class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(
      :email_address,
      :username,
      :real_name,
      :password
    )
  end
end
