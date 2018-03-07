@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :id
  end
end
