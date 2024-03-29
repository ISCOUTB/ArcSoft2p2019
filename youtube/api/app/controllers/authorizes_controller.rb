require 'funciones.rb'

APPLICATION_NAME = 'YouTube Data API Ruby Tests'

class AuthorizesController < ApplicationController
  include Funciones 
  before_action :set_authorize, only: [:show, :update, :destroy]

  # GET /authorizes
  def index
    service = Google::Apis::YoutubeV3::YouTubeService.new
    service.client_options.application_name = APPLICATION_NAME
    @authorize = self.authorize()
    render body: @authorize
  end

  # GET /authorizes/1
  def show
    render json: @authorize
  end

  # POST /authorizes
  def create
    @authorize = Authorize.new(authorize_params)

    if @authorize.save
      render json: @authorize, status: :created, location: @authorize
    else
      render json: @authorize.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /authorizes/1
  def update
    if @authorize.update(authorize_params)
      render json: @authorize
    else
      render json: @authorize.errors, status: :unprocessable_entity
    end
  end

  # DELETE /authorizes/1
  def destroy
    @authorize.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_authorize
      @authorize = Authorize.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def authorize_params
      params.fetch(:authorize, {})
    end
end
