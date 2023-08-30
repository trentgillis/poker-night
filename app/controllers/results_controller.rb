class ResultsController < ApplicationController
  def index
    @users = User.all
  end
end