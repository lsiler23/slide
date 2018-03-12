App.chatroom = App.cable.subscriptions.create "ChatroomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # debugger
    alert data['message']

  speak: (message) ->
    # debugger
    @perform 'speak', message: message
