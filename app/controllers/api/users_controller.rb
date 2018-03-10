class Api::UsersController < ApplicationController
  def index

    if params[:query].present?
      @users = User.where('username ~ ?', params[:query])
    else
      @users = User.all
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email_address,
      :username,
      :password
    )
  end
end
