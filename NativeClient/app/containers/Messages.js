import React, { View, Text } from 'react-native';
import { connect } from 'react-redux';
import style from '../style';

import TextBox from '../components/TextBox';
import Log from '../components/Log';

import { createMessage } from '../modules/chat';

function Messages({ user, chat, onSubmitEditing }) {
  return (
    <View style={{flex:1}}>
      <View {...style('username')}>
        <Text {...style('usernameText')}>{user.username}</Text>
      </View>
      <Log messages={chat} />
      <TextBox onSubmitEditing={onSubmitEditing} />
    </View>
  );
}

export default connect(
  ({ chat, user }) => ({ chat, user }),
  (dispatch) => ({
    onSubmitEditing: ({ nativeEvent: { text: message } }) => dispatch(createMessage(message))
  })
)(Messages);