Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :schools do
    resources :comments
      post :confirm, on: :collection
    end
  resources :comments
  resources :votes
end
