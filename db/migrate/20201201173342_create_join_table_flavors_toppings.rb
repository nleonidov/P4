class CreateJoinTableFlavorsToppings < ActiveRecord::Migration[6.0]
  def change
    create_join_table :flavors, :toppings do |t|
      # t.index [:flavor_id, :topping_id]
      # t.index [:topping_id, :flavor_id]
    end
  end
end
