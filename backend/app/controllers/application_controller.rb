class ApplicationController < ActionController::API

    def current_user
        token= request.headers['Auth-Key']
        
        begin
            customer_id=JWT.decode(token, ENV['SUPER_SECRET_KEY'])[0]["customer_id"]
            @customer= Customer.find_by(id: customer_id)
        rescue
            nil
        end
    end

    def authenticate!
       
        unless current_user
            nil
        end
    end
    
end
