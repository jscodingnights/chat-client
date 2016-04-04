# Chat Client (React)

You have a choice from where you'd like to start.

1. On your own, do whatever client type you want and make your own project/folder from scratch.
2. Clone this repo and begin with one of the provided apps.

#### Provided Starting Points
- **NativeClientStarter** - React Native (No redux, only a component example)
- **WebClientStarter** - React (No redux, only a component example)
- **NativeClient** - React Native + Redux (Complete, working implementation) - This is only available on the `answer` branch.  `git checkout answer`

### Helpful Resources
- [SocketIO Chat Example](http://socket.io/get-started/chat/) - Ignore the server part.
- [React Tutorial](https://facebook.github.io/react/docs/tutorial.html) - Super basic intro
- [Redux Sample Todo](http://redux.js.org/docs/basics/ExampleTodoList.html) - Can see all the parts on one page
- [Example Redux + React App](https://github.com/jscodingnights/react-tic-tac-toe) - React Tic-Tac-Toe App, made at a previous meetup

# Getting Started
````
git clone https://github.com/jscodingnights/chat-client.git
cd chat-client
cd STARTER_FOLDER_NAME
npm install
````

### Native
Complete the Requirements in the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) guide.

### Web
From the web folder, run `npm run dev` and navigate to [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html).


## API Implementation Guide

### Chat Server URL: [https://jscn-chat.herokuapp.com](https://jscn-chat.herokuapp.com)

When connecting via Socket.IO, you can leave off the "https://" bit. 

[See note about alternative `action` event syntax below](#alternative-action-event-syntax).

### Step 1: Connecting to the Server

Using the URL above, establish a socket connection.

#### React Native

```javascript
// Be sure to use require, as import is hoisted.  The if needs to come first as well.  Just... don't change these lines... :)
if (!window.navigator.userAgent) {
  // Fix socket.io check
  window.navigator.userAgent = 'react-native';
}

const io = require('socket.io-client/socket.io');
const socket = io('jscn-chat.herokuapp.com', { jsonp: false, transports: ['websocket'] });
```

#### Web

```javascript
import io from 'socket.io-client';
const socket = io('jscn-chat.herokuapp.com');
```

`socket` has two methods of importance.  `emit` and `on` which send and listen to events respectively.  When any event is dispatched corresponding to the event name given to `on`, the callback is executed with the included payload.

When you first connect, your username is set to "Anonymous".  This can be changed (see Step 4).

### Step 2: Sending Messages

```javascript
const messageEventData = { 
    message: { 
        text: 'Hello World!' 
    }
};

socket.emit('CREATE_MESSAGE', messageEventData);
```

>**IMPORTANT** When you emit a `CREATE_MESSAGE` event, you will not receive the corresponding `RECEIVE_MESSAGE` event.  That is, a client is responsible for displaying its own messages and need not wait for a socket response before doing so.

### Step 3: Receiving Messages

```javascript
const appState = {
    messages: []
};

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
    
    appState.messages.push(incomingMessage.message);
});
```

### Step 4: Updating Your User Profile

When you first connect, you are assigned a username of "Anonymous".  You can change this using the event `UPDATE_USER` so that your name is sent along with any messages you create.

When you successfully update your user, an event will be sent back of the type `RECEIVE_USER` to provide the full state of the user that the server has.  You can use this to sync your local user state with that of the server.

```javascript
const appState = {
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
    
    // Update local user state
    appState.user = incomingMessage.user;
});

// Give the server an update of your user details
socket.emit('UPDATE_USER', appState.user);
```

### Step 5: Displaying Other Members

When you first connect, and whenever a user joins, leaves, or changes their profile data, the entire list of active users is broadcasted via `RECEIVE_MEMBERS`.  This is heavy-handed obviously, but a nice simplification. Rather than trying to make individual user updates locally, simply discard your entire local state of users and update with the state given.

```
const appState = {
    members: []
};

socket.on('RECEIVE_MEMBERS', (incomingMessage) => {
    // incomingMessage ==> {
    //     type: 'RECEIVE_MEMBERS',
    //     members: [{
    //         username: 'Anonymous'
    //     },{
    //         username: 'Sally Sue',
    //         created: 1459693594853 // Epoch
    //     }]
    // }

    // Blast away current state and re-render
    appState.members = incomingMessage.members;
});
```


## Alternative `action` event syntax

All events can also be listened to, or emitted, via a unified `action` event where the payload contains an object with a `type` property corresponding to the event type.  

This is because Socket.IO does not support wildcard matching, and if you wanted to have a single event handler receive every event, that'd be otherwise not possible without a plugin.

This is choice also makes the use of [Redux-socket.io](https://github.com/itaylor/redux-socket.io) possible if you choose.

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




