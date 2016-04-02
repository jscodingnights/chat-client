import React, { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import style from '../style';

import * as ChatActions from '../modules/chat';
import * as UserActions from '../modules/user';

import Log from '../components/Log';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import CreateUser from './CreateUser';
import Messages from './Messages';


function Chat({ created }) {
  let screen;

  if (!created) {
    screen = <CreateUser />;
  } else {
    screen = <Messages />;
  }

  return (
    <View {...style('page')}>
      {screen}
    </View>
  );
}

export default connect(
  ({ user: { created } }) => {
    return { created: !!created };
  }
)(Chat);