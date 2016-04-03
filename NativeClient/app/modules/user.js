import socket from '../socket';

export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function updateCurrentUser(user) {
  return (dispatch, getState) => {
    const { user } = getState();
    return dispatch(socket.action(updateUser(user)));
  };
};

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user
  };
};

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
};

export default function userReducer(state = {}, action) {
  switch(action.type) {
    case LOGIN_USER:
      return action.user;

    case UPDATE_USER:
      return {
        ...state,
        ...action.user
      };

    default:
      return state;
  }
};
