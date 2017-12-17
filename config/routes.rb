Rails.application.routes.draw do
  resources :schools do
    resources :comments
      post :confirm, on: :collection
    end
  resources :comments
  resources :votes
end
