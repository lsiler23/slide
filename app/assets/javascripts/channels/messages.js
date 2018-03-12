App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received: function(data) {
  //   $("#messages").removeClass('hidden');
  //   return $('#messages').append(this.renderMessage(data));
  // },
  //
  // renderMessage: function(data) {
  //   return "<p> <b>" + data.author + ": </b>" + data.message + "</p>";
  // }
  
});
