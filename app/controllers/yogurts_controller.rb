class YogurtsController < ApplicationController

    def index
        @yogurts = Yogurt.all

        render json: @yogurts, include: [:flavor, :toppings]
    end

    def show
        @yogurt = Yogurt.find(params[:id])

        render json: @yogurt, include: [:flavor, :toppings] 
    end
end
