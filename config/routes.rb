Rails.application.routes.draw do
  resources :reviews
  resources :yogurts
  resources :flavors
  resources :toppings
end
