Rails.application.routes.draw do
  root "results#index"

  devise_for :users, controllers: { registrations: 'users/registrations' }

  resource :passwords, module: 'users', only: [:edit, :update]
  resource :results
end
