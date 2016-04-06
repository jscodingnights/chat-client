import React, { View } from 'react-native';
import { connect } from 'react-redux';

import style from '../style';

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