import { incomingMessage, sendMessageAction } from './actions/message';

const io = require('socket.io-client/socket.io');
const socket = io('jscn-chat.herokuapp.com', { jsonp: false, transports: ['websocket'] });
let storeInstance = null;

export default function initializer(store) {
  storeInstance = store;
  socket.emit('UPDATE_USER', { username: 'Just me' });
  socket.on('RECEIVE_MESSAGE', (data) => {
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
    store.dispatch(incomingMessage(data.message));
  });
};

export function sendMessage(text) {
  socket.emit('CREATE_MESSAGE', { message: { text }})
  storeInstance.dispatch(sendMessageAction(text, 'just me'));
}
