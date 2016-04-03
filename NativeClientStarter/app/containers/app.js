import React, { View, Text } from 'react-native';
import styleContext from '../style';

import Button from '../components/Button';

/**
 * PRO-TIP: Component-specific styles that have no reuse beyond the 
 * component itself should be defined with the component.
 */
const style = styleContext.extend({
  welcomeMessage: {
    fontSize: 20,
    color: '$secondary'
  }
});

/**
 * PRO-TIP: Containers know about application state.  They include within
 * them other containers and components.  They should have no (or very
 * limited) style definitions, but I have some here for documentation
 * purposes.
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View {...style('page.noNav')}>
        <Text {...style('header welcomeMessage')}>
          &lt;Insert Chat Client Here&gt;
        </Text>
        <Button onPress={() => {}}>Press me (I do nothing)!</Button>
      </View>
    );
  }
}