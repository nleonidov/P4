class YogurtsController < ApplicationController

    def index
        @yogurts = Yogurt.all

        render json: @yogurts
    end

    def show
        render json: @yogurt, include: :flavors
    end
end
