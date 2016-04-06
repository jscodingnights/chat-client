const initialState = [
  {
    text: 'Hello, this is dummy chat text',
    author: {
      username: 'Dummy Kiddy'
    },
    date: Date.now()
  },
  {
    text: 'Hello, this is dummy chat text',
    author: {
      username: 'Dummy Kiddy'
    },
    date: Date.now()
  }
]

export default function messageReducer (state = initialState, action) {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return [...state, action.message];
    default:
      return state;
  }
}
