class CreateParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :participations do |t|
      t.integer :participant_id, null: false
      t.integer :chatroom_id, null: false
    end
    add_index :participations, :participant_id
    add_index :participations, :chatroom_id
  end
end
