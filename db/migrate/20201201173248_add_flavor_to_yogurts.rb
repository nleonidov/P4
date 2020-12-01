class AddFlavorToYogurts < ActiveRecord::Migration[6.0]
  def change
    add_reference :yogurts, :flavor, null: false, foreign_key: true
  end
end
