import React, { Text, TouchableHighlight } from 'react-native';
import styleContext from '../style';

const style = styleContext.extend({
  button: {
    props: {
      underlayColor: '$primaryHighlight'
    },
    
    backgroundColor: '$primary',
    height: 50
  },

  buttonLabel: {
    fontWeight: 'bold',
    color: '$white'
  }
});

export default function Button({ onPress, children }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      {...style('button centerXY')}>
      <Text {...style('buttonLabel')}>{ children }</Text>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  onPress: React.PropTypes.func.isRequired
};