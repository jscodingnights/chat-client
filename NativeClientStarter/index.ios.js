/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { AppRegistry } from 'react-native';

import App from './app/containers/app';

class NativeClientStarter extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('NativeClientStarter', () => NativeClientStarter);
