class Cart < ApplicationRecord
  belongs_to :customer
  

  has_many :item_orders
  has_many :menu_items, through: :item_orders
end
