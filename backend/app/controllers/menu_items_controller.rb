class MenuItemsController < ApplicationController

    before_action :authenticate!, only: [:index]
    def index
        
        menu_items = MenuItem.all
        render json: menu_items, status: 200

    end

    def show
        menu_item = MenuItem.find_by(id: params[:id])
        render json: menu_item, status: 200
    end
    
end
