class CustomersController < ApplicationController
    def index
        customers = Customer.all
        render json: customers, status: 200
    end

    
    def create
        customer = Customer.create(customer_params)
        render json: customer, status: 201
    end

    
    
    def update
        @customer = ItemOrder.find(params[:id])
        @customer.update(item_order_params)
        render json: @customer, status: 200
    end
    
    def destroy
        @item_order = ItemOrder.find(params[:id])
        item_orderId = @item_order.id
        @item_order.destroy
        render json: {message:"Item Order deleted", item_orderId:item_orderId}
    end
    
    def show
        @item_order = ItemOrder.find(params[:id])
        render json: @item_order, status: 200
    end
    
    private
    def item_order_params
        params.permit(:cart_id, :menu_item_id)
    end
end
