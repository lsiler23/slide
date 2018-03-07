class Participation < ApplicationRecord
  
  belongs_to :chatroom

  belongs_to :user,
    class_name: :User,
    foreign_key: :participant_id,
    primary_key: :id

end
