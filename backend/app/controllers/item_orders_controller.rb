class ItemOrdersController < ApplicationController
    # def index
    #     item_orders = ItemOrder.all
    #     render json: item_orders, status: 200
    # end

    
    # def create
    #     item_order = ItemOrder.create(item_order_params)
    #     render json: item_order, status: 201
    # end

    
    
    # def update
    #     @item_order = ItemOrder.find(params[:id])
    #     @item_order.update(item_order_params)
    #     render json: @item_order, status: 200
    # end
    
    # def destroy
    #     @item_order = ItemOrder.find(params[:id])
    #     item_orderId = @item_order.id
    #     @item_order.destroy
    #     render json: {message:"Item Order deleted", item_orderId:item_orderId}
    # end
    
    # def show
    #     @item_order = ItemOrder.find(params[:id])
    #     render json: @item_order, status: 200
    # end
    
    # private
    # def item_order_params
    #     params.permit(:cart_id, :menu_item_id)
    # end

end
