class CartsController < ApplicationController
    # before_action :authenticate!, only: [:create]
 
    
    def create
        cu=current_user.id
        total=params["total"]
        cart= Cart.create(customer_id: cu, total: total)
        render json: cart, status: 201
    end

    def show
        cart = Cart.find_by(id: params[:id])
        render json: cart.as_json(
            include: [:item_orders]
        ), status: 200
    end
    
end
