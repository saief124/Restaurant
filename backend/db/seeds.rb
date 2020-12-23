# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Customer.destroy_all
Store.destroy_all
MenuItem.destroy_all
Cart.destroy_all
ItemOrder.destroy_all

customers = [
    {name: 'Bob', phone_number: '123-456-7890', address: 'San Antonio, Tx'},
    {name: 'John', phone_number: '123-456-7890', address: 'Houston, Tx'}
]
customers.each { |customer| Customer.create!(customer) }

stores = [
    {location: 'San Antonio, Tx', phone_number: '1234567890', hours: '9am-5pm', delivery_info: 'carryout only'},
]
stores.each { |store| Store.create!(store) }
#  x = Store.new(location: 'San Antonio, Tx', phone_number: '1234567890', hours: '9am-5pm', delivery_info: 'carryout only')
#  x.save

menu_items = [
    {name: 'pizza', price: 3.50, description: 'delicious pizza', category: 'italian', store_id: Store.first.id},
    {name: 'burger', price: 6.50, description: 'delicious burger', category: 'american', store_id: Store.first.id}
]
menu_items.each { |menu_item| MenuItem.create!(menu_item) }

carts = [
    {customer_id: Customer.first.id},
    {customer_id: Customer.second.id}
]
carts.each { |cart| Cart.create!(cart) }

item_orders = [
    {cart_id: Cart.first.id, menu_item_id: MenuItem.first.id},
    {cart_id: Cart.second.id, menu_item_id: MenuItem.second.id}
]
item_orders.each { |item_order| ItemOrder.create!(item_order) }