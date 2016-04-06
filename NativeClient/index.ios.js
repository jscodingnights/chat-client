import React, { AppRegistry, View } from 'react-native';

import { Provider } from 'react-redux';
import Chat from './app/containers/Chat';
import store from './app/store';

function NativeClient() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

AppRegistry.registerComponent('NativeClient', () => NativeClient);
