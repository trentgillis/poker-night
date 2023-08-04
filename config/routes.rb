Rails.application.routes.draw do
  devise_for :users
  root "winnings#index"
end
