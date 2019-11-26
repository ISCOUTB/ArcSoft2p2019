require 'funciones.rb'
APPLICATION_NAME = 'YouTube Data API Ruby Tests'

class UsersController < ApplicationController
  include Funciones
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    service = Google::Apis::YoutubeV3::YouTubeService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize_org()
    @users = self.search_by_username(service, 'id', q:params.fetch("username"), type:'channel')

    render json: @users

  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:id, :username, :fullname, :followers, :posts)
    end
end
