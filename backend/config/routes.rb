Rails.application.routes.draw do
  # resources :item_orders
  resources :carts, only: [:show]
  resources :customers, except: [:new, :destroy, :edit]
  resources :menu_items, only: [:index, :show]
  resources :stores, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
