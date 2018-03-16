# Slide

[Click here](https://slide-chat-app.herokuapp.com/#/) to view the live app!

Slide is a messaging app cloned from Slack.

Users can log in and join channels, create them, or chat with their friends individually or in groups.
Gifs and emojis are available for that extra messaging flair.

## Technologies Used

* Rails
* React/Redux
* Websockets/Action Cable

## Features

### Live Chat
Messages are broadcasted using Action Cable, so users can chat live in any number of chatrooms (broken down into channels and direct messages).

 When you first login...

 ```javascript

 // channel_view

 createSubscriptionAndFocus() {
   const { match, receiveMessage } = this.props;

   this.subscription = App.cable.subscriptions.create(
     {channel: 'ChatroomChannel', id: match.params.chatroomId},
     {received: (message) => receiveMessage(message)}
   );
   document.getElementById('message-input').focus();
 }

 componentDidMount() {
   const { fetchChatroom, match } = this.props;
   fetchChatroom(match.params.chatroomId);
   this.createSubscriptionAndFocus();
 }
 ```

 ``` ruby

 # messages#create

 if @message.save
   ChatroomChannel.broadcast_to(@message.chatroom, JSON.parse(render('/api/messages/_message.json.jbuilder', locals: { message: @message })))
   head :ok
 ```

### Direct Message Verification
Users can leave direct messages without having to worry about losing access to any past conversations. A simple search for the other users involved will bring the direct message back to life.

This feature was a little tricky because searching through all direct messages' participating users can become very inefficient, very quickly. To cut down on that level of querying, I used sorted titles based on usernames.

```javascript
  checkForUniqueness(title) {
    const { allDMs } = this.props;
    const sortedTitle = title.split(', ').sort().join(', ');

    for (let i = 0; i < allDMs.length; i++) {
      let currentTitle = allDMs[i].title.split(', ').sort().join(', ');
      if (currentTitle === sortedTitle) {
        return [false, allDMs[i]];
      }
    }
    return [true];
  }
  ```
  ![dmgif](https://media.giphy.com/media/1oETSPiB1ZTNlnRwEc/giphy.gif)

### Giphy shuffle messaging
By far the most beloved Slack easter egg! Users can search for the perfect gif by entering '/giphy [amazing search]' in any channel input bar.

```javascript
  handleEnter() {
    const {
      match, currentUser, receiveGifQuery,
      fetchGif, createMessage
    } = this.props;

    const chatroomId = Number(match.params.chatroomId);
    const authorId = Number(currentUser.id);
    const thisBody = this.state.body.slice(0, 7);
    const thisQuery = this.state.body.slice(7);

    return (e) => {
      e.preventDefault();
      if (thisBody === '/giphy ') {
        receiveGifQuery(thisQuery, chatroomId);
        fetchGif(thisQuery);
      } else {
        createMessage({
          body: this.state.body,
          chatroom_id: chatroomId,
          author_id: authorId
        });
      }
      this.setState({body: ''});
    };
  }
```

## Upcoming Features

* Searchable mentions
* Live notifications
* Searchable messages
