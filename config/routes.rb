Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root :to => "schools#index"
  resources :schools do
    collection do
      get :search
    end

    resources :comments
      post :confirm, on: :collection
    end
  resources :comments
  resources :votes

  namespace :staff do
    root 'top#index'
    get 'login' => 'sessions#new', as: :login
    post 'session' => 'sessions#create', as: :session
    delete 'session' => 'sessions#destroy'
  end
end
