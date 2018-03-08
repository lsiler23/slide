json.set! @chatroom.id do
  json.extract! @chatroom, :id, :title
  json.participant_ids @chatroom.participant_ids
end

json.set! :participants do
  @chatroom.participants.each do |part|
    json.set! part.id do
      json.extract! part, :id, :username, :real_name
    end
  end
end
