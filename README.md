# Chat Client (React)

You have a choice from where you'd like to start.

1. React Native + Complete Implementation = NativeClient
2. React Native Starter = NativeClientStarter
3. React Web Starter = WebClientStarter

## Helpful Resources
- [SocketIO Chat Example](http://socket.io/get-started/chat/) - Ignore the server part.
- [Example Redux + React App](https://github.com/jscodingnights/react-tic-tac-toe) - React Tic-Tac-Toe App, made at a previous meetup

## API Implementation Guide

### Chat Server URL: [https://jscn-chat.herokuapp.com](https://jscn-chat.herokuapp.com)

When connecting via Socket.IO, you can leave off the "https://" bit. 

[See note about alternative `action` event syntax below](#alternative-action- event-syntax).

### Step 1: Connect to the server

Using the URL above, establish a socket connection.

```javascript
// This is for React Native only:
if (!window.navigator.userAgent) {
  // Fix socket.io check
  window.navigator.userAgent = "react-native";
}

// All clients (for RN, use the require syntax to avoid hoisting bugs... trust me)
const io = require('socket.io-client/socket.io');
const socket = io('jscn-chat.herokuapp.com', { jsonp: false });
```

### Step 2: Sending Messages

```javascript
const myMessage = { 
    message: { 
        text: 'Hello World!' 
    }
};

socket.emit('CREATE_MESSAGE', myMessage);
```

Note that when you emit a message, it is not emitted back to you.  A client is responsible for displaying its own messages (this is standard socket.io broadcast behavior).

Until you set up your username, a name will be assigned for you as "Anonymous #".

### Step 3: Receiving Messages

```javascript
socket.on('RECEIVE_MESSAGE', (incomingMessage) => {
    // incomingMessage ==> {
    //     type: 'RECEIVE_MESSAGE',
    //     message: {
    //         text: 'Message body text',
    //         author: {
    //             username: 'User Name'         
    //         },
    //         date: 1459693594853 // Epoch
    //     }
    // }
    
    alert(incomingMessage.message.text);
});
```

### Step 4: Setting your username

When you first connect, you are assigned a username of "Anonymous".  You can change this using the event `UPDATE_USER` so that your name is sent along with any messages you create.

When you successfully update your user, an event will be sent back of the type `RECEIVE_USER` to provide the full state of the user that the server has.  You can use this to sync your local user state with that of the server.

```javascript
const myUser = {
    user: {
        username: 'Sally Sue'
    }
};

// Receive the server's state of your current user info
socket.on('RECEIVE_USER', (incomingMessage) => {
    // incomingMessage ==> {
    //     type: 'RECEIVE_USER',
    //     user: {
    //         username: 'Sally Sue',
    //         created: 1459693594853 // Epoch
    //     }
    // }
});

// Give the server an update of your user details
socket.emit('UPDATE_USER', myUser);
```

### Step 5: Display other active users

When you first connect, and whenever a user joins, leaves, or changes their profile data, the entire list of active users is broadcasted via `MEMBERS_UPDATE`.  This is heavy-handed obviously, but a nice simplification. Rather than trying to make individual user updates locall, simply discard your entire local state of users and update with the state given.

```
const otherUsers = [];

socket.on('MEMBERS_UPDATE', (incomingMessage) => {
    // incomingMessage ==> {
    //     type: 'MEMBERS_UPDATE',
    //     users: [{
    //         username: 'Anonymous'
    //     },{
    //         username: 'Sally Sue',
    //         created: 1459693594853 // Epoch
    //     }]
    // }

    // Blast away current state and re-render
    otherUsers = incomingMessage.users;
});
```


## Alternative `action` event syntax

All events can also be listened to, or emitted, via an event called `action` where the payload contains an object with a `type` property corresponding to the event type.  This is because Socket.IO does not support wildcard matching, and if you wanted to have a single event handler receive every event, that'd be otherwise not possible without a plugin.

This is necessary for the plugin [Redux-socket.io](https://github.com/itaylor/redux-socket.io).

```javascript
// Receive all action types
socket.on('action', (incomingMessage) => {
    switch (incomingMessage.type) {
        case 'RECEIVE_USER':
            // ...
            break;
        // ...
    }
});

// Single emit example using 'action'
socket.emit('action', {
    type: 'CREATE_MESSAGE',
    message: {
        text: 'Hello world!'
    }
});
```




