Rails.application.routes.draw do
  resources :notes
  resources :tasks
  resources :lists

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root 'static#index'
  

end
