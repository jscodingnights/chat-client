import React, { Text, TouchableHighlight } from 'react-native';
import styleContext from '../style';

const style = styleContext.extend({
  button: {
    props: {
      underlayColor: '$primaryHighlight'
    },
    
    backgroundColor: '$primary',
    height: 50
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