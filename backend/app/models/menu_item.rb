class MenuItem < ApplicationRecord
    belongs_to :store
    has_many :item_orders
    has_many :carts, through: :item_orders
end
