class User < ApplicationRecord
  validates :email_address, :username, :session_token, :password_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :created_chatrooms,
    class_name: :Chatroom,
    foreign_key: :creator_id,
    primary_key: :id

  has_many :participations,
    class_name: :Participation,
    foreign_key: :participant_id,
    primary_key: :id

  has_many :subscribed_chatrooms,
    through: :participations,
    source: :chatroom

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :subscribe_to_general

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def subscribe_to_general
    general = Chatroom.where('title = ?', 'general')
    Participation.create!({
      participant_id: self.id,
      chatroom_id: general.ids[0]
      })
  end
end
