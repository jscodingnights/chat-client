import React from 'react';

import Messages from './Messages';
import InputMessage from './InputMessage';

/**
 * PRO-TIP: Containers know about application state.  They include within
 * them other containers and components.  They should have no (or very
 * limited) style definitions, but I have some here for documentation
 * purposes.
 */

export default class App extends React.Component {
  render() {
    return (
      <div>
		  Hello chatty People!
		  <Messages/>
		  <InputMessage/>
      </div>
    );
  }
}
