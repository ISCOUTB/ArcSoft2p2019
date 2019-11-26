require 'funciones.rb'

APPLICATION_NAME = 'YouTube Data API Ruby Tests'

class AuthorizeCodesController < ApplicationController
  include Funciones
  before_action :set_authorize_code, only: [:show, :update, :destroy]

  # GET /authorize_codes
  def index
    code = params.fetch("code")
    scope = params.fetch("scope")
    all = code + "&scope=" + scope
    puts (all)
    self.get_code(all)
    render body: "Continue with the Application Tools"
  end

  # GET /authorize_codes/1
  def show
    render json: @authorize_code
  end

  # POST /authorize_codes
  def create
    @authorize_code = AuthorizeCode.new(authorize_code_params)

    if @authorize_code.save
      render json: @authorize_code, status: :created, location: @authorize_code
    else
      render json: @authorize_code.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /authorize_codes/1
  def update
    if @authorize_code.update(authorize_code_params)
      render json: @authorize_code
    else
      render json: @authorize_code.errors, status: :unprocessable_entity
    end
  end

  # DELETE /authorize_codes/1
  def destroy
    @authorize_code.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_authorize_code
      @authorize_code = AuthorizeCode.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def authorize_code_params
      params.fetch(:authorize_code, {})
    end
end
