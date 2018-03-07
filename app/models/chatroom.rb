class Chatroom < ApplicationRecord

  validates :creator_id, presence: true
  validates :isDM, inclusion: { in: [true, false] }

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id

  has_many :participations,
    class_name: :Participation,
    foreign_key: :chatroom_id,
    primary_key: :id

  has_many :participants,
    through: :participations,
    source: :user


end
