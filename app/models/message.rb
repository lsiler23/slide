class Message < ApplicationRecord

  validates :author_id, :chatroom_id, :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :chatroom

  after_create_commit { MessageBroadcastJob.perform_later self}
end
