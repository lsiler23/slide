@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :id, :title
    json.participant_ids chatroom.participant_ids
  end
end
