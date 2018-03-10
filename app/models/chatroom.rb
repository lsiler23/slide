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

  after_create :subscribe_user_to_chatroom

  def subscribe_user_to_chatroom
    user = User.find(self.creator_id)

    if self.isDM
      debugger
      participants = self.title.split(', ')
      participants.each do |part|
        current_part = User.where('username ~ ?', part)
        Participation.create!({
          participant_id: current_part.first.id,
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
