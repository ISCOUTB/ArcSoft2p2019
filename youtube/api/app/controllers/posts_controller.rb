require 'funciones.rb'
APPLICATION_NAME = 'YouTube Data API Ruby Tests'

class PostsController < ApplicationController
  include Funciones
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    service = Google::Apis::YoutubeV3::YouTubeService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize
    @posts = self.videolist(service, 'contentDetails', channel_id:'UC_x5XG1OV2P6uZZ5FSM9Ttw', max_results:'5')

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:id, :likes, :efficiency, :user)
    end
end
