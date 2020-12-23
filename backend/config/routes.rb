Rails.application.routes.draw do
  resources :item_ordereds
  resources :carts
  resources :customers
  resources :menu_items
  resources :restaurants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
