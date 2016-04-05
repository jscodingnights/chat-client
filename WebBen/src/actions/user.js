export function updateUser(username) {
  return {
    type: 'UPDATE_USERNAME',
    user: {
      username,
    },
  }
}
