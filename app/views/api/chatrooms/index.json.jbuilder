@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title, :isDM, :created_at
    json.participant_ids channel.participant_ids
  end
end
