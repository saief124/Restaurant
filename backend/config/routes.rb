Rails.application.routes.draw do
  resources :item_orders
  resources :carts
  #resources :customers
  resources :menu_items
  resources :stores
  post '/signup', to: 'customers#create'
  post '/login', to: 'sessions#create'
    scope '/checkout' do
      post 'create', to: 'checkout#create', as: 'checkout_create'
      get 'cancel', to: 'checkout#cancel', as: 'checkout_cancel'
      get 'success', to: 'checkout#success', as: 'checkout_success'
    end

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
