Rails.application.routes.draw do
  resources :notes
  resources :tasks
  resources :lists
  get '/users/:id' => 'users#show'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root 'static#index'


end
