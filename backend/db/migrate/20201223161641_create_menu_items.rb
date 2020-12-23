class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.string "name"
      t.decimal "price"
      t.string 'description'
      t.string "category"
      t.integer "store_id"


      t.timestamps
    end
  end
end
