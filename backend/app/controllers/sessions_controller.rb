class SessionsController < ApplicationController

    def create
        @customer = Customer.find_by(name: params[:name])
        if @customer && @customer.authenticate(params[:password])
        payload = {customer_id: @customer.id}
        token = JWT.encode(payload,'secretkey','HS256')
        render :json => {auth_key: token}
        else
            render :json => {msg: "login failed"}
        end    
    end        
end
