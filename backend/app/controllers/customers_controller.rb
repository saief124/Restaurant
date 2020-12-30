class CustomersController < ApplicationController
    # def index
    #     customers = Customer.all
    #     render json: customers, status: 200
    # end

    
    def create
        @customer = Customer.create(customer_params)
        payload = {custom_id: @customer.id}
        token = JWT.encode(payload,'secretkey','HS256')
        render :json => {auth_key: token}
    
    end

    
    
    # def update
    #     @customer = Customer.find(params[:id])
    #     @customer.update(customer_params)
    #     render json: @customer, status: 200
    # end
    
    # def destroy
    #     @customer = Customer.find(params[:id])
    #     customerId = @customer.id
    #     @customer.destroy
    #     render json: {message:"Customer deleted", customerId:customerId}
    # end
    
    # def show
    #     @customer = Customer.find(params[:id])
    #     render json: @customer, status: 200
    # end
    
    private
    def customer_params
        params.require(:customer).permit(:name, :phone_number, :address, :password)
    end
end
