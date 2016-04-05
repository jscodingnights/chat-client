export function incomingMessage(message) {
  return {
    type: 'NEW_MESSAGE',
    message
  }
}

export function sendMessageAction(text, username) {
  return {
    type: 'NEW_MESSAGE',
    message: {
      text,
      date: Date.now(),
      author: {
        username,
      },
    }
  }
}
