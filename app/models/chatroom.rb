class Chatroom < ApplicationRecord

  validates :creator_id, presence: true
  validates :isDM, inclusion: { in: [true, false] }

  belongs_to :user,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id
  
end
