Rails.application.routes.draw do
  resources :authorize_codes
  resources :authorizes
  resources :users
  resources :posts
  get 'user/getUserByUsername'
  get 'post/getPostsByNumber'
  get 'post/getPost'
  get 'user/getUser'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
