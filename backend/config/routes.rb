Rails.application.routes.draw do
  resources :item_orders
  resources :carts
  #resources :customers
  resources :menu_items
  resources :stores
  post '/signup', to: 'customers#create'
  post '/login', to: 'sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
