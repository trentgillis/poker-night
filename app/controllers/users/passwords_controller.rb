# frozen_string_literal: true

class Users::PasswordsController < ApplicationController
  before_action :authenticate_user!

  def edit
    @user = current_user
  end

  def update
    @user = current_user

    if @user.update_with_password(update_password_params)
      sign_in @user, bypass: true
    else
      render :edit, status: :unprocessable_entity
    end
  end

  protected

  def update_password_params
    params.require(:user).permit(:current_password, :password, :password_confirmation)
  end
end