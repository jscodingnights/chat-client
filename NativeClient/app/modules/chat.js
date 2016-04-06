import socket from '../socket';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function createMessage(text) {
  return (dispatch) => {
    return dispatch(socket.action({
      type: CREATE_MESSAGE,
      message: {
        text
      }
    }));
  };
};

export function receiveMessage(message) {
  debugger;
  return {
    type: RECEIVE_MESSAGE,
    message
  };
}

export default function chatReducer(state = [], action) {
  switch(action.type) {
    case CREATE_MESSAGE:
    case RECEIVE_MESSAGE:
      return [...state, action.message];

    default:
      return state;
  }
};
