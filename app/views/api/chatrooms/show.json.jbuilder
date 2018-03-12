json.channel do
  json.extract! @chatroom, :id, :title, :isDM
  json.participant_ids @chatroom.participant_ids
  json.message_ids @chatroom.message_ids
end

json.set! :participants do
  @chatroom.participants.each do |part|
    json.set! part.id do
      json.extract! part, :id, :username, :real_name
    end
  end
end

json.set! :messages do
  @chatroom.messages.each do |msg|
    json.set! msg.id do
      json.extract! msg, :id, :author_id, :body, :created_at
    end
  end
end
