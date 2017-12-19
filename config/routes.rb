Rails.application.routes.draw do
  resources :schools do
    collection do
      get :search
    end

    resources :comments
      post :confirm, on: :collection
    end
  resources :comments
  resources :votes
end
