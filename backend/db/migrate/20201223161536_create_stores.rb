class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string "location"
      t.string "phone_number"
      t.string "hours"
      t.string "delivery_info"

      t.timestamps
    end
  end
end
