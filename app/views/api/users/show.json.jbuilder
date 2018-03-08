json.set! :user do
  json.partial! 'api/users/user', user: current_user
  json.chatroom_ids current_user.subscribed_chatroom_ids
end

json.set! :chatrooms do
  current_user.subscribed_chatrooms.each do |cr|
    json.set! cr.id do
      json.extract! cr, :id, :title
      json.participant_ids cr.participant_ids
    end
  end
end
