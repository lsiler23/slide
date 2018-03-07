class CreateChatrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :chatrooms do |t|
      t.integer :creator_id, null: false
      t.boolean :isDM, null: false
      t.string :title

      t.timestamps
    end
    add_index :chatrooms, :creator_id
  end
end
