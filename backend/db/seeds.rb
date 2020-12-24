require 'json'
require 'uri'
require 'net/http'
require 'openssl'
  def get_response_body
    url = URI("https://documenu.p.rapidapi.com/restaurant/4072702673999819/menuitems?size=50&page=2")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'documenu.p.rapidapi.com'
    request["x-rapidapi-key"] = '4da63b4f99msh76bb9a4c479f730p1b819bjsn0230dd6a4478'
    request["x-api-key"] = '1846c4434a257f87e0885e2e4d6c664b'
    response = http.request(request)
    response.read_body
  end

  def parse_json
    a= get_response_body
    parsed_string= JSON.parse(a)
    @mydata=parsed_string["data"]   
  end
  
parse_json  
    
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
    {location: @mydata.first["address"]["formatted"], phone_number: @mydata.first["restaurant_phone"], hours: @mydata.first["restaurant_hours"], delivery_info: 'carryout only'},
]
stores.each { |store| Store.create!(store) }

@mydata.each do |item|
    MenuItem.create(name: item["menu_item_name"], price: item["menu_item_price"], description: item["menu_item_description"], category: item["subsection"], store_id: Store.first.id)
end

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