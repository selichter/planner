Rails.application.routes.draw do
  resources :notes
  resources :tasks
  resources :lists
  devise_for :users


  root 'static#index'

end
