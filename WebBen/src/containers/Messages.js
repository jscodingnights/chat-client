import { connect } from 'react-redux'
import Messages from '../components/Messages.jsx'

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const MessagesConnected = connect(
  mapStateToProps
)(Messages)

export default MessagesConnected
