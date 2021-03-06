class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email_address], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: { errors: ['Try Again'] }, status: 422
    end
  end

  def destroy

    if logged_in?
      logout
      render json: { }
    else
      render json: { }, status: 404
    end
  end
end
