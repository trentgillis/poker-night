class ResultsController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @users = User.all
  end

  def new
    @result = Result.new
  end

  def create
    @result = current_user.results.create(results_params)

    if @result.persisted?
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  protected

  def results_params
    params.require(:result).permit(:buy_in_amount, :win_amount)
  end
end