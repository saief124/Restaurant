class StoresController < ApplicationController
    def show
        store = Store.find_by(id: params[:id])
        render json: store, status: 200
    end
end
