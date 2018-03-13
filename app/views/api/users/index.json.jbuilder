@users.each do |user|

  json.set! user.id do
    json.extract! user, :id, :username, :real_name, :updated_at
  end
end
