if (!window.navigator.userAgent) {
  // Fix socket.io check
  window.navigator.userAgent = "react-native";
}

var io = require("socket.io-client/socket.io");

var socket = io('localhost:3000', {jsonp: false});

module.exports = socket;