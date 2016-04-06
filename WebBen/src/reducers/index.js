import { combineReducers } from 'redux'
import messages from './message'

const chatApp = combineReducers({
  messages
});

export default chatApp
