if (!window.navigator.userAgent) {
  // Fix socket.io check
  window.navigator.userAgent = "react-native";
}

var io = require("socket.io-client/socket.io");

var socket = io('jscn-chat.herokuapp.com', {jsonp: false});

module.exports = {
  on(event, cb) {
    console.log('SOCKET:ON', event);
    socket.on(event, (...args) => {
      console.log('SOCKET:RECEIVED', event, ...args);
      cb(...args);
    });
  },

  emit: socket.emit.bind(socket),

  action(action) {
    return {
      ...action,
      server: true
    };
  }
};