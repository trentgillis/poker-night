Rails.application.routes.draw do
  root "winnings#index"

  devise_for :users, controllers: { registrations: 'users/registrations' }

  resource :passwords, module: 'users', only: [:edit, :update]
end
