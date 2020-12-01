class Yogurt < ApplicationRecord
    has_and_belongs_to_many :toppings
    belongs_to :flavor
end
