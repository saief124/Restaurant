class ApplicationController < ActionController::API

    def current_user
        byebug
    end

    def authenticate!
        unless current_user
            nil
        end
    end
    
end
