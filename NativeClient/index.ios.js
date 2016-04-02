import React, { AppRegistry, View } from 'react-native';

import { Provider } from 'react-redux';
import Chat from './app/containers/Chat';
import store from './app/store';

class messenger extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NativeClient', () => messenger);
