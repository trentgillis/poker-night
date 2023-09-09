# frozen_string_literal: true

class ResultCard::Component < ApplicationViewComponent
  def initialize(user:)
    @user = user
  end
end