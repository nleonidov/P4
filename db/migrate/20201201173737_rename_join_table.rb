class RenameJoinTable < ActiveRecord::Migration[6.0]
  def change
    rename_table :flavors_toppings, :toppings_yogurts
    rename_column :toppings_yogurts, :flavor_id, :yogurt_id
  end
end
