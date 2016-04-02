import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../modules';
import socket from '../socket';
import createSocketIoMiddleware from './socketMiddleware';

const socketIoMiddleware = createSocketIoMiddleware(socket, (name, action) => !!action.server);
const createStoreWithMiddleware = applyMiddleware(socketIoMiddleware, thunk)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};
