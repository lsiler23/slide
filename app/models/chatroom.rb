class Chatroom < ApplicationRecord

  validates :creator_id, presence: true
  validates :title, uniqueness: true
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

  has_many :messages

  after_create :subscribe_user_to_chatroom

  def subscribe_user_to_chatroom
    user = User.find(self.creator_id)
    all_users = self.title.split(', ')

    if self.isDM && all_users.length > 1
      all_users.each do |part|
        current_part = User.where('username ~ ?', part)
        Participation.create!({
          participant_id: current_part.first.id || user.id,
          chatroom_id: self.id
          })
      end
    else
      Participation.create!({
        participant_id: user.id,
        chatroom_id: self.id
        })
    end
  end
end
