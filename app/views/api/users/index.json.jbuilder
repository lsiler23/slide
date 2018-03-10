@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :real_name
    json.subscription_ids user.subscribed_chatrooms_ids
  end
end
