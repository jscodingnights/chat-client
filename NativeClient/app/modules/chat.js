import socket from '../socket';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function createMessage(text) {
  return (dispatch, getState) => {
    const { user: author } = getState();
    return dispatch(socket.action({
      type: CREATE_MESSAGE,
      message: {
        author,
        text
      }
    }));
  };
};

export function receiveMessage(message) {
  console.log('receiving message', message);
  return {
    type: RECEIVE_MESSAGE,
    message
  };
}

export default function chatReducer(state = [], action) {
  switch(action.type) {
    case RECEIVE_MESSAGE:
      return [...state, action.message];

    default:
      return state;
  }
};
